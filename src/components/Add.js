import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter, Link } from 'react-router-dom'
import { Route, browserHistory, Redirect } from 'react-router'


export class Add extends React.Component {

    constructor(props) {

        super(props);


        this.state = {
            contact: {
                id: "",
                name: "",
                lastName: "",
                avatar: "",
                nickname: "",
                company: "",
                jobTitle: "",
                email: "",
                phone: "",
                address: "",
                birthday: "",
                notes: ""
            },
            redirect: false,
            currentContact: null
        }
        debugger;
        console.log(this.props);
        if (this.props.match.params.id != "null") {
            this.state.currentContact = this.props.data.filter(c => c.id == this.props.match.params.id);
            this.state.contact.name = this.state.currentContact[0].name;
            this.state.contact.lastName = this.state.currentContact[0].lastName;
            this.state.contact.avatar = this.state.currentContact[0].avatar;
            this.state.contact.email = this.state.currentContact[0].email;
            this.state.contact.phone = this.state.currentContact[0].phone;
            this.state.contact.id = this.state.currentContact[0].id;
        }
        this.onInputChange = this.onInputChange.bind(this);
    };
    onInputChange = (event) => {
        debugger;
        const contactt = this.state.contact;
        contactt[event.target.id] = event.target.value;
        this.setState({ contact: contactt })
    }
    returnToList = (e) => {
        debugger;
        e.preventDefault();
        this.setState({ redirect: true })
    }
    onSave = (event) => {
        debugger;

        if (this.state.currentContact == null) {
            this.props.onAdd(this.state.contact);
            this.state.contact.id = this.props.data.length + 1;
        }
        else
            this.props.onUpdate(this.state.contact);
        this.returnToList(event);
    }
    render() {
        if (this.state.redirect) return <Redirect to="/ContactList" />
        return (
            <div class="set-section">
                <form class="panel panel-default">
                    <div class="panel-heading">
                        <span >Add</span>
                        <span >Set</span> Contact <span class="font-bold"></span> </div>
                    <div class="panel-body panel-contacts">
                        <div class="panel-body panel-contacts">
                            <div class="contact-header row">
                                <br /><br /><br /><br /><br />
                                <div class="contact-header row">
                                    <span class="required-sign">*&nbsp;</span>
                                    <input type="text"
                                        id="name"
                                        onChange={this.onInputChange}
                                        placeholder="first name"
                                        value={this.state.contact.name}
                                        class="form-control display-inline" />
                                </div>
                                <br />
                                <div class="contact-header row">
                                    <span class="required-sign">*&nbsp;</span>
                                    <input type="text"
                                        id="lastName"
                                        onChange={this.onInputChange}
                                        placeholder="lastName"
                                        value={this.state.contact.lastName}
                                        class="form-control display-inline" />
                                </div>
                                <br />
                                <div class="contact-header row">
                                    <span class="required-sign">*&nbsp;</span>
                                    <input type="text"
                                        id="avatar"
                                        onChange={this.onInputChange}
                                        placeholder="img"
                                        value={this.state.contact.avatar}
                                        class="form-control display-inline" />

                                </div>
                                <br />
                                <div class="contact-header row">
                                    <span class="required-sign">*&nbsp;</span>
                                    <input type="email"
                                        id="email"
                                        onChange={this.onInputChange}
                                        placeholder="e-mail"
                                        value={this.state.contact.email}
                                        class="form-control display-inline" />
                                    <br />
                                </div>
                                <div class="contact-header row">
                                    <span class="required-sign">*&nbsp;</span>
                                    <input type="phone"
                                        id="phone"
                                        onChange={this.onInputChange}
                                        placeholder="phone"
                                        value={this.state.contact.phone}
                                        class="form-control display-inline" />
                                </div>
                                <button class="panel-footer" type="submit" onClick={this.onSave} >Save</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
                );
    }
}
