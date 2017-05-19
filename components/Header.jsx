import React from 'react';
var {Link, IndexLink} = require('react-router');

class Header extends React.Component{
    render(){
        return(
            <div>
                <nav className="white" role="navigation">
                    <div className="nav-wrapper container">
                        <a id="logo-container" href="#" className="brand-logo">Logo</a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link href='' to='/'>Home</Link></li>
                            <li><Link href='' to='upload'>Upload</Link></li>
                            <li><Link href='' to='about'>About Us</Link></li>
                            <li><Link href='' to='contact'>Contact Us</Link></li>
                            <li><Link className="waves-effect waves-light btn blue-grey darken-4" to="login">Login</Link></li>
                        </ul>
                        <ul id="nav-mobile" className="side-nav">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Upload</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a className="waves-effect waves-light btn">Login</a></li>
                        </ul>
                        <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
                    </div>
                </nav>
            </div>
        );
    }
    
}

module.exports= Header;