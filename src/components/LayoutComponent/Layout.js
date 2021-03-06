import React from "react";
import { Link } from "react-router-dom";


export class Layout extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            collapsed: true,
            today: new Date()
        };
    }
    toggleCollapse = (page) => {
        
        const collapsed = !this.state.collapsed;
        this.setState({ collapsed });
        //change title
        document.title=page;
    }
    
    button = {
        margin: '0.5%',
        float: 'right'
    };

    render() {
        const { location } = this.props;
        const { collapsed } = this.state;
        const navClass = collapsed ? "collapse" : "";
        
        return (
            <nav className="navbar navbar-inverse navbar-static-top" role="navigation" >
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" onClick={this.toggleCollapse} >
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">

                         
                           
                                <li>
                                    <Link to="/" onClick={() => {this.toggleCollapse("home") } } >Home</Link>
                                </li>
                                <li>
                                    <Link to="/ContactList" onClick={() => { this.toggleCollapse("contact list") } }>ContactList</Link>
                                </li>
                                <li>
                                    <Link to={`/Add/${null}`} onClick={() => { this.toggleCollapse("add") } }>Add</Link>
                                </li>
                                <li>
                                    <Link to={`/Graph`}>Graph</Link>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
        );
    }
}

export default Layout;
