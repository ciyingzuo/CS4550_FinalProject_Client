import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import LoginPage from "./components/login/LoginPage";
import PrivateProfile from "./components/profile/PrivateProfile";

class App extends React.Component {
    render() {
        return (
                <Router>
                    <div className="container-fluid">
                        <Link to="/Login">loginpage</Link> |
                        <Link to="/Profile">profile</Link> |
                        <Route path='/Login' component={LoginPage}/>
                        <Route path='/Profile' component={PrivateProfile}/>
                    </div>
                </Router>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);