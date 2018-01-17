import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom'
import { Route } from 'react-router'
import { ContactList } from './ContactList'
import style from './home.css'

export class Home extends Component {
    constructor(props) {
        super(props);       
    }

    render() {
        return (
            <div  >
                <div className='home' >
                    <div className='text'>Count of contacts:</div>
                    <div><h1>{this.props.data.length}</h1></div>
                    <div><Link to="/ContactList"  >to the list </Link></div>
                          
                </div>
            </div>
        );
    }
}
