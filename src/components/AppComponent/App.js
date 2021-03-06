import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { onLoad } from '../../actions/contactAction';
import { OnAddContact, OnUpdateContact, deleteContact, OnSearchContact, OnRefreshContact, OnSearchContactLastName, OnSearchContactFirstName, OnSearchContactEmail, OnSearchContactPhone } from '../../actions/contactAction'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from '../HomeComponent/home';
import { Add } from '../AddComponent/Add';
import { ContactList } from '../ContactListComponent/ContactList';
import { Layout } from '../LayoutComponent/Layout'
import { ContactGraph } from '../ContactGraphComponent/ContactGraph';

class App extends Component {
    componentWillMount() {
        this.props.onLoad();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Layout />
                        <Route exact path="/"
                            render={(props) => <Home {...props} data={this.props.data}></Home>} />
                        <Route path="/ContactList"
                            render={(props) => <ContactList onLoad={this.props.onLoad} onDelete={this.props.delete}  onSearch={this.props.Search} data={this.props.data} FilterList={this.props.FilterList} OnRefresh={this.props.Refresh}></ContactList>} />
                        <Route path="/Add/:id"
                            render={(props) => <Add {...props} onAdd={this.props.add} onUpdate={this.props.update} data={this.props.data} ></Add>} />
                        <Route path="/Graph"
                            render={(props) => <ContactGraph {...props} data={this.props.data} onLoad={this.props.onLoad} onRefresh={this.props.Refresh}></ContactGraph>} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}


function mapStateToProps(store, ownProps) {
    return {
        data: store.data,
        FilterList: store.FilterList
    };
}


function mapDispatchToProps(dispatch) {
    return {
        delete: (id) => dispatch(deleteContact(id)),
        onLoad: () => dispatch(onLoad()),
        add: (contact) => dispatch(OnAddContact(contact)),
        update: (contact) => dispatch(OnUpdateContact(contact)),
        Search: (value) => dispatch(OnSearchContact(value)),
        Refresh: () => dispatch(OnRefreshContact())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);