import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link  } from 'react-router-dom'
import { Route } from 'react-router'
import { Contact } from './Contact'

export class ContactList extends Component {

    constructor(props) {
        super(props);      
    }
    render() {
        console.log(this);

        return (
            <div>
                <Link to={`/Add/${null}`} >Add</Link>

                <br /><br /><br />
                <div class="table-users">
                    <table cellspacing="0" >
                    <tbody>
                        <tr>
                            <th>firstName</th>
                            <th>lastName</th>
                            <th>image</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>delete</th>
                            <th>update</th>
                        </tr>
                        {this.props.data.map(user => <Contact onDelete={this.props.onDelete} {...user} id={user.id}></Contact>)}
                    </tbody>

                </table>
                </div>
            </div>

        );
    }
}


                