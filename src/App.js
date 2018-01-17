import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { onLoad } from './actions/contactAction'
import { OnAddContact } from './actions/contactAction'
import { OnUpdateContact } from './actions/contactAction'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './components/home';
import { Add } from './components/Add';
import {
    deleteContact
} from './actions/contactAction';
import {
    ContactList
} from './components/ContactList';
import { Layout } from './components/Layout'
class App extends Component {
    componentWillMount() {
        this.props.onLoad();
    }

    render() {
        console.log(this)
        return (
            <div>
              
                <BrowserRouter>
                
                    <div className="App">
                        <Layout />
                        <Route exact path="/"
                            render={(props) => <Home {...props} data={this.props.data} OnSearch={this.props.search}></Home>} />
                        <Route path="/ContactList"
                            render={(props) => <ContactList onDelete={this.props.delete} data={this.props.data}></ContactList>} />
                        <Route path="/Add/:id"
                            render={(props) => <Add {...props} onAdd={this.props.add} onUpdate={this.props.update} data={this.props.data} ></Add>} />
                    </div>

                </BrowserRouter>
            </div>
        );
    }
}
function mapStateToProps(store, ownProps) {
    return {
        data: store.data
    };
}


function mapDispatchToProps(dispatch) {
    return {
        delete: (id) => dispatch(deleteContact(id)),
        onLoad: () => dispatch(onLoad()),
        add: (contact) => dispatch(OnAddContact(contact)),
        update: (contact) => dispatch(OnUpdateContact(contact)),
        search: (searchKey) => dispatch(OnSearch(searchKey))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
