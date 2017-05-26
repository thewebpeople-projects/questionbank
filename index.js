import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './components/reducers';
//var App=require('App');
import App from './components/App.jsx';
var About=require('About');
var Contact=require('Contact');
var Home=require('Home');
var Upload=require('Upload');
//var Login=require('Login');
import Login from 'Login';

const store= createStore(reducer);

ReactDOM.render(
    (
        <Provider store={store}>
            <Router history = {hashHistory}>
            <Route path = "/" component = {App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path = "about" component = {About}></Route>
            <Route path = "contact" component = {Contact}></Route>
            <Route path = "upload" component = {Upload}></Route>
            <Route path = "login" component={Login}></Route>
            </Route>
            </Router>
        </Provider>
    ),document.getElementById('app'));