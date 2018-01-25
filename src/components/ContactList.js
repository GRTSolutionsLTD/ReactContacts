import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom'
import { Route } from 'react-router'
import { Contact } from './Contact'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { deleteContact } from './../actions/contactAction';


    
export class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.props.OnRefresh();
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

        this.props.OnRefresh();
        this.props.onSearchFirstName(this.state.ValueSearch);
    }

    onInputChangeLastName = (event) => {
        const value = event.target.value;
        this.state.ValueSearch = value;

        this.props.OnRefresh();
        this.props.onSearchLastName(this.state.ValueSearch);
    }

    onInputChangePhone = (event) => {
        const value = event.target.value;
        this.state.ValueSearch = value;

        this.props.OnRefresh();
        this.props.onSearchPhone(this.state.ValueSearch);
    }
                
            
    onInputChangeEmail = (event) => {
        const value = event.target.value;
        this.state.ValueSearch = value;

        this.props.OnRefresh();
        this.props.onSearchEmail(this.state.ValueSearch);
    }


         
    render() {

        const columns = [
            {
                Header: "Name",
                columns: [
                    {
                        Header: "First Name",
                        accessor: "name"
                    },
                    {
                        Header: "Last Name",
                        id: "lastName",
                        accessor: d => d.lastName
                    }
                ]
            },
            {
                Header: "details",
                columns: [
                    {
                        Header: "Email",
                        accessor: "email"
                    },
                    {
                        Header: "Phone",
                        accessor: "phone"
                    }
                ]
            },
            {
                Header: "functions",
                columns: [
                            {
                            expander: true,
                            Header: () => <span>Delete</span>,
                            width: 65,
                            Expander: ({ row }) =>
                                <span><button className="delete" onClick={() =>  this.props.onDelete(row._original.id)}>delete</button></span>,
                    },
                            {
                                expander: true,
                                Header: () => <span>Delete</span>,
                                width: 65,
                                Expander: ({ row }) =>
                                    <span ><Link to={`/Add/${row._original.id}`}>Update</Link></span>,
                            },
                ]
            }
            
        ];
        
        return (
            <div>
                <Link to={`/Add/${null}`} >Add</Link>
                <br /><br /><br />
                <ReactTable
                    data={this.props.FilterList}
                    columns={columns}
                    showPagination={true}
                    showPageSizeOptions={false}
                    defaultPageSize={10}
                    filterable
                   
                />  



                
            </div>
        );
    }
}