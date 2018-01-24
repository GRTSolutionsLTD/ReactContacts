import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom'
import { Route } from 'react-router'
import { Contact } from './Contact'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

    
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

        const columns = [{ Header: 'First name', accessor: 'name' },
                         { Header: 'Last Name', accessor: 'lastName' },
                         { Header: 'Phone', accessor: 'phone' },
                         { Header: 'Email', accessor: 'email' },]
       
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
                    TrComponent={Contact} />
                  
            </div>
        );
    }
}