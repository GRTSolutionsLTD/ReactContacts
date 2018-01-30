import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom'
import { Route } from 'react-router'
import ReactDOM from 'react-dom';
import { LineChart, Line, CartesianGrid, YAxis, XAxis, Tooltip, ComposedChart, Legend, Bar, RadialBarChart, RadialBar, PieChart, Pie, Cell} from 'recharts';
import SnowStorm from 'react-snowstorm';
import CustomTooltip from './CustomTooltip';
import AxisLabel from './AxisLabel';
import './ContactGraph.css';


export class ContactGraph extends Component {
    amountArray = [];
    totalArray = [];
   
    constructor(props) {
     
        super(props);

        this.state = {
            amountArray: this.amountArray,
            totalArray: this.totalArray
        }
       
    }
  
    componentDidMount(prevProps) {
        if (this.props.data.length>0) {
            this.createAmountArray();
            this.createArrayTotalIncomeOfAgeGroup();
        }
        else {
                this.props.onLoad().then(() => {
                    this.createAmountArray();
                    this.createArrayTotalIncomeOfAgeGroup();
                });
        }
        
    }
   
    createArrayTotalIncomeOfAgeGroup = () => {
        this.totalArray = [];
        for (var i = 0; i < this.props.data.length; i++) {
            this.checkAndAddToTotalArray(this.props.data[i].price, this.props.data[i].birthday);
        }

        this.setState({ totalArray: this.totalArray })
    }

    checkAndAddToTotalArray = (price, birthday) => {
        var currentYear = new Date(birthday).getFullYear();
        
        var found = this.totalArray.some(function (el) {
            if (el.year === currentYear) {
                el.total += price;
                return true;
            }
            return false;     
        });
        if (!found) { this.totalArray.push({ year: currentYear, total: price, fill: this.getRandomColor(), name: "Age group : "+(new Date().getFullYear() - currentYear).toString()}); }
        console.log(this.totalArray);

    }
   
    getRandomColor=()=> {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    checkAndAddToAmountArray = (price) => {
        var found = this.amountArray.some(function (el) {
            return el.price === price && el.people++;
        });
        if (!found) { this.amountArray.push({ price: price, people: 1 }); }
        console.log(this.amountArray);
    }

    createAmountArray = () => {
        this.amountArray = [];
        for (var i = 0; i < this.props.data.length; i++) {
            this.checkAndAddToAmountArray(this.props.data[i].price);
        }
        this.setState({ amountArray: this.amountArray })
    }
   
    
    render() {
        return (
            <div className="container">
                <SnowStorm snowStick="false" snowCharacter="$" snowColor="goldenrod" flakeWidth={200} flakeHeight={200} animationInterval={33} />
                <div className="row">
                    <div className="page-header">
                        <h1>Total Graph</h1>
                    </div>
                    <p className="description">
                        This graph describes the total income of the same age group.
                    </p>
                </div>
                <RadialBarChart width={730} height={300} innerRadius="10%" outerRadius="80%" data={this.state.totalArray} startAngle={360} endAngle={0} innerRadius={20} outerRadius={140}>
                    <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='total' />

                    <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
                    <Tooltip />
                </RadialBarChart>
                <div className="ch-item ch-img-2">
                    <div className="ch-info-wrap">
                        <div className="ch-info">
                            <div className="ch-info-front ch-img-2"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="page-header">
                        <h1>Amount Graph</h1>
                    </div>
                    <p className="description">
                        This graph Describes the amount paid for each price.
                    </p>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <ComposedChart
                            width={600}
                            height={400}
                            data={this.state.amountArray}
                            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                            <XAxis dataKey="price" label={{ value: 'price', angle: 0, position: 'insideBottomRight' }} />
                            <YAxis dataKey="people" label={{ value: 'amount of people', angle: -90, position: 'insideLeft' }} />
                            <Tooltip content={<CustomTooltip />} />
                            <Legend />
                            <CartesianGrid stroke='#f5f5f5' />
                            <Bar dataKey='people' barSize={20} fill='#001657' />
                            <Line type='monotone' dataKey='people' stroke='#ff7300' />
                        </ComposedChart>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactGraph;

