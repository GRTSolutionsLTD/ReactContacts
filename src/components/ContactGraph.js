import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom'
import { Route } from 'react-router'
import ReactDOM from 'react-dom';
import { LineChart, Line, CartesianGrid, YAxis, XAxis, Tooltip, ComposedChart, Legend, Bar } from 'recharts';
import SnowStorm from 'react-snowstorm';

const CustomTooltip = React.createClass({
    propTypes: {
        payload: PropTypes.array
    },

    render() {
        const { active } = this.props;

        if (active) {
            const { payload, label } = this.props;
            return (
                <div className="custom-tooltip transparent">
                    <p className="label">{`${label} : ${payload ? payload[0].value : 0}`}</p>
                    <p className="intro">Price:Amount of people</p>
                </div>

            );
        }

        return null;
    }
});

const AxisLabel = ({ axisType, x, y, width, height, stroke, children }) => {
    const isVert = axisType === 'yAxis';
    const cx = isVert ? x : x + (width / 2);
    const cy = isVert ? (height / 2) + y : y + height + 10;
    const rot = isVert ? `270 ${cx} ${cy}` : 0;
    return (
        <text x={cx} y={cy} transform={`rotate(${rot})`} textAnchor="middle" stroke={stroke}>
            {children}
        </text>
    );
};


export interface Props {
    data: [];
    onLoad: object;
}

export class ContactGraph extends Component {
    pointsArray = [];
    constructor(props) {
        super(props);
        console.log(props,"this is my types");
        this.state = {
            pointsArray: this.pointsArray,
            //progressBarWrappersClasses: "row",
            // progressBarStyle={ width: '10%' }
        }
        this.props.onLoad().then(() => {
            this.createArray();
            //this.setState((prevState, props) => {
            //    return { progressBarWrappersClasses: prevState.progressBarWrappersClasses + " hide" };
            //});
        });

        //let timerId = setInterval(() => {
        //    var width = "20%";
        //    var onlyNumberOfWidth = str.slice(0, 2);
        //    var add20 = parseInt(onlyNumberOfWidth) + 20;
        //    this.setState({
        //        progressBarStyle: { width:add20.toString() + "%" }
        //    });
        //}, 2000);

        //setTimeout(() => { clearInterval(timerId); }, 10000);

    }

    checkAndAdd = (price) => {
        var found = this.pointsArray.some(function (el) {
            return el.price === price && el.people++;
        });
        if (!found) { this.pointsArray.push({ price: price, people: 1 }); }
        console.log(this.pointsArray);
    }

    createArray = () => {
        this.pointsArray = [];
        for (var i = 0; i < this.props.data.length; i++) {
            this.checkAndAdd(this.props.data[i].price);
        }
        this.setState({ pointsArray: this.pointsArray })
    }
    //add progress bar to render

    //    <div className={this.state.progressBarWrappersClasses}>
    //        <div className="col-sm-6 col-sm-offset-3">
    //            <div className="progress">
    //                <div className="progress-bar progress-bar-striped" role="progressbar" style={this.state.progressBarStyle} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
    //            </div>
    //        </div>
    //    </div >

    render() {
        return (
            <div className="container">
                <SnowStorm snowColor="#808080"  />
                <div className="row">
                    <div className="page-header">
                        <h1>Contact Graph</h1>
                    </div>
                    <p className="dscrb">
                        This graph Describes the amount paid for each price.
                    </p>
                </div>


                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <ComposedChart
                            width={600}
                            height={400}
                            data={this.state.pointsArray}
                            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                            <XAxis dataKey="price" label={{ value: 'price', angle: 0, position: 'insideBottomRight', color: 'red' }} />
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

