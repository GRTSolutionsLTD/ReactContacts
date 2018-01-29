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



         
    render() {

        const columns = [
            {
                Header: "Name",
                columns: [
                    {
                        Header: "First Name",
                        accessor: "name",
                        filterMethod: (filter, row) => {
                            return (row[filter.id]).toLowerCase().startsWith(filter.value.toLowerCase());
                        }
                    }, 
                    {
                        Header: "Last Name",
                        id: "lastName",
                        accessor: d => d.lastName,
                        filterMethod: (filter, row) => {
                            return (row[filter.id]).toLowerCase().startsWith(filter.value.toLowerCase());
                        }
                    }
                ]
            },
            {
                Header: "details",
                columns: [
                                 {
                                     Header: "Email",
                                     accessor: "email",
                                     filterMethod: (filter, row) => {
                                         return (row[filter.id]).toLowerCase().startsWith(filter.value.toLowerCase());
                                  }

                                 },
                                 {
                                     Header: "Phone",
                                     accessor: "phone"
                                 },
                                 {
                                     Header: "Price",
                                     accessor: "price"
                                 },
                                 {
                                     expander: true,
                                     Header: () => <span>Image</span>,
                                     width: 100,
                                     heigh: 50,
                                     Expander: ({ row }) =>
                                         <img src={row._original.avatar}></img>,
                                 },
                        ]
            },
            {
                Header: "functions",
                columns: [
                            {
                            expander: true,
                            Header: () => <span>Delete</span>,
                            width: 80,
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
            <div className="container">
                <div className="tbl row text-center">
                            <ReactTable
                                data={this.props.FilterList}
                                columns={columns}
                                showPagination={true}
                                showPageSizeOptions={false}
                                defaultPageSize={8}
                                filterable /> 
                </div>
                <div className="row text-center">
                        <input className="search" type="text" placeholder="search" onChange={this.onInputChange} />
                  </div>
            </div>


        );
    }
}