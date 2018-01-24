import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom'
import { Route } from 'react-router'
import { ContactList } from './ContactList'
import style from './home.css'
//import ToolTip from 'react-portal-tooltip';


export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            today: new Date()
        };
    }

    onInputChange = (event) => {
    }
    render() {
        return (
            <div  >
             

                <div className='home' >
                    <div className='text'>Count of contacts</div>
                    <br />
                    <div className='number' >{this.props.data.length}</div>
                    <div className="center-wrap">
                        <div className="button">
                            <Link to="/ContactList">to the list <span className="shift"></span></Link>
                            <div className="mask"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

