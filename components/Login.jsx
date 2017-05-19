import React from 'react';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.register=this.register.bind(this);
    }
    componentDidMount() {
        $('.modal').modal();
    }
    register(){
        alert(document.getElementByID('first_name'));
    }
    render(){
        return(
            <div>
                <div className="login">
                    <div className="">
                        <div className="input-field col s8">
                            <i className="material-icons prefix">account_circle</i>
                            <input  id="username" type="text" className="validate"/>
                            <label htmlFor="username">User Name</label>
                        </div>
                        <div className="input-field col s8">
                            <i className="material-icons prefix">vpn_key</i>
                            <input id="password" type="password" className="validate"/>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="center input-field col s6">
                            <input type="checkbox" className="filled-in" id="filled-in-box" defaultChecked="checked" />
                            <label htmlFor="filled-in-box">Remember me</label>
                        </div>
                        <div className="center input-field col s12">
                            <a className="login-button waves-effect waves-light btn center">Login</a>
                        </div>
                        <div className="row input-field col s12">
                            <div className="col s6 left-align">
                                <a data-target="modal1" className="waves-effect waves-light">Register</a>
                            </div>
                            <div className="col s6 right-align">
                                <a>Forgot Password?</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <div className="container">
                            <h3 className="center">Register</h3>
                        </div>
                        <hr/>
                        <br/>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">account_circle</i>
                                        <input id="first_name" type="text" className="validate"/>
                                        <label htmlFor="first_name">First Name</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="last_name" type="text" className="validate"/>
                                        <label htmlFor="last_name">Last Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">vpn_key</i>
                                        <input id="password" type="password" className="validate"/>
                                        <label htmlFor="password">Password</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">vpn_key</i>
                                        <input id="C_password" type="password" className="validate"/>
                                        <label htmlFor="C_password">Confirm Password</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <p className="col s4">
                                        <input name="gender" type="radio" id="male" />
                                        <label htmlFor="male">Male</label>
                                    </p>
                                    <p className="col s4">
                                        <input name="gender" type="radio" id="female" />
                                        <label htmlFor="female">Female</label>
                                    </p>
                                    <p className="col s4">
                                        <input name="gender" type="radio" id="other" />
                                        <label htmlFor="other">Other</label>
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">email</i>
                                        <input id="email" type="email" className="validate"/>
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">phone</i>
                                        <input id="phone" type="tel" min="10" max="10" className="validate"/>
                                        <label htmlFor="phone">Phone</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">business</i>
                                        <input id="college" type="text" className="validate"/>
                                        <label htmlFor="college">College Name</label>
                                    </div>
                                </div>
                                <div className="row center-align">
                                    <a className="waves-effect waves-light btn centre-align" onClick={this.register}>Register</a>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

module.exports= Login;