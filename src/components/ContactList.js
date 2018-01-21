import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom'
import { Route } from 'react-router'
import { Contact } from './Contact'
import SmartDataTable from 'react-smart-data-table'
    
    
    
export class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.props.OnRefresh();
        console.log(this.props)
    }

    onInputChange = (event) => {
        const value = event.target.value;
        this.state.ValueSearch = value;
        this.props.OnRefresh();
        this.props.onSearch(this.state.ValueSearch);
    }

    onInputChangeFirstName = (event) => {
        const value = event.target.value;
        this.state.ValueSearch = value;
        ///source page
        this.props.OnRefresh();
        this.props.onSearchFirstName(this.state.ValueSearch);
    }

    onInputChangeLastName = (event) => {
        const value = event.target.value;
        this.state.ValueSearch = value;
        ///source page
        this.props.OnRefresh();
        this.props.onSearchLastName(this.state.ValueSearch);
    }

    onInputChangePhone = (event) => {
        const value = event.target.value;
        this.state.ValueSearch = value;
        ///source page
        this.props.OnRefresh();
        this.props.onSearchPhone(this.state.ValueSearch);
    }
                
            
    onInputChangeEmail = (event) => {
        const value = event.target.value;
        this.state.ValueSearch = value;
        ///source page
        this.props.OnRefresh();
        this.props.onSearchEmail(this.state.ValueSearch);
    }



           
    render() {
       // console.log(this);
        return (
            <div >
                <Link to={`/Add/${null}`} >Add</Link>
                <br /><br /><br />
                <input className="search" type="text" placeholder="search" onChange={this.onInputChange} />
                <div className="table-users">
                    <table >
                        <tbody>
                            <tr>
                                <th>firstName</th>
                                <th>lastName</th>
                                <th>image</th>
                                <th>email</th>
                                <th>phone</th>
                                <th>update</th>
                                <th>delete</th>
                            </tr>
                            <tr>
                                <th><input name="firstName" onChange={this.onInputChangeFirstName} /></th>
                                <th><input name="lastName" onChange={this.onInputChangeLastName} /></th>
                                <th></th>
                                <th><input name="email" onChange={this.onInputChangeEmail} /></th>
                                <th><input name="phone" onChange={this.onInputChangePhone} /></th>
                                <th></th>
                                <th></th>  
                            </tr>
                            {this.props.FilterList.map((user, i) => <Contact key={i} onDelete={this.props.onDelete} {...user} id={user.id}></Contact>)}
                        </tbody>
                        
                    </table>


                    <SmartDataTable
                        data={this.props.FilterList}
                        name='test-table'
                        className='ui compact selectable table'
                        perPage={5} />
                </div>
            </div>
        );
    }
}


