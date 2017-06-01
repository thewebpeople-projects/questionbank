import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, BrowserHistory} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './components/reducers';
import App from './components/App.jsx';
import About from 'About';
import Contact from 'Contact';
import Home from 'Home';
import Upload from 'Upload';
import Login from 'Login';

const store= createStore(reducer);

ReactDOM.render(
    (
        <Provider store={store}>
        <BrowserHistory>
            <Route path = "/" component = {App}>
            <IndexRoute component={Home}/>
            <Route path = "about" component = {About}></Route>
            <Route path = "contact" component = {Contact}></Route>
            <Route path = "upload" component = {Upload}></Route>
            <Route path = "login" component={Login}></Route>
            </Route>
        </BrowserHistory>
        </Provider>
    ),document.getElementById('app'));