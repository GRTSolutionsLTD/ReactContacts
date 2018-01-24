import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteContact } from './../actions/contactAction';

export class Contact extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // var x = this.props.avatar; rrrr
        //remark : chagit
        //add remark
        return (
            <div>
                <span> {this.props.name}</span>
                <span> {this.props.lastName}</span>
                <span> <img src={this.props.avatar} style={{ width: 100, height: 50 }} /> </span>
                <span> {this.props.email} </span>
                <span> {this.props.phone} </span>

                <span ><Link to={`/Add/${this.props.id}`}>Update</Link></span>
                <span><button className="delete" onClick={() => this.props.onDelete(this.props.id)}>delete</button></span>
            </div>
        );
    }
}