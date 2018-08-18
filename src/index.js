import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import LoginPage from "./components/login/LoginPage";
import PrivateProfile from "./components/profile/PrivateProfile";
import RegisterPage from "./components/Register/RegisterPage";
import MainPage from "./components/mainPage/MainPage";
import demo from "./components/demo";

class App extends React.Component {
    render() {
        return (
                <Router>
                    <div className="container-fluid">
                        <Link to="/Login">loginpage</Link> |
                        <Link to="/Register">register</Link> |
                        <Link to="/Profile">profile</Link> |
                        <Link to="/MainPage">mp</Link> |
                        <Link to="/demo">demo</Link> |
                        <Route path='/Login' component={LoginPage}/>
                        <Route path='/Register' component={RegisterPage}/>
                        <Route path='/Profile' component={PrivateProfile}/>
                        <Route path='/MainPage/:userID' component={MainPage}/>
                        <Route path='/demo' component={demo}/>
                    </div>
                </Router>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);