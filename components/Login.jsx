import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {login} from './actions';


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login_details:{
                email:'',
                password:''
            },
            token:''
        }
    }
    componentDidMount() {
        $('.modal').modal();
    }
    register(){
        alert(document.getElementByID('first_name'));
    }
    login(){
        console.log("hi",this);
        const login_url="http://localhost:8080/login";
        console.log("Login");
        console.log(this.state.login_details);
        fetch(login_url,{
            method:'post',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state.login_details)
        })
            .then(res=>res.json())
            .then(json=>{
            console.log(json);
            if(json.success===true){
                this.state.token=json.token;
            }
        });
        console.log("token",this.state);
    }
    render(){
        return(
            <div>
                <div className="login">
                    <div className="">
                        <div className="input-field col s8">
                            <i className="material-icons prefix">account_circle</i>
                            <input  
                                id="username" 
                                type="text" 
                                className="validate" 
                                onChange={event=>this.setState({login_details:{email:event.target.value,
                                                                               password:this.state.login_details.password}
                                                               })
                                         }
                                />
                            <label htmlFor="username">User Name</label>
                        </div>
                        <div className="input-field col s8">
                            <i className="material-icons prefix">vpn_key</i>
                            <input 
                                id="password" 
                                type="password" 
                                className="validate"
                                onChange={event=>this.setState({login_details:{email:this.state.login_details.email,
                                                                               password:event.target.value}
                                                               })
                                         }
                                />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="center input-field col s6">
                            <input type="checkbox" className="filled-in" id="filled-in-box" defaultChecked="checked" />
                            <label htmlFor="filled-in-box">Remember me</label>
                        </div>
                        <div className="center input-field col s12">
                            <button
                                className="login-button waves-effect waves-light btn center"
                                onClick={()=>this.login()}
                                >Login</button>
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
                                    <a className="waves-effect waves-light btn centre-align" onClick={()=>this.register}>Register</a>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({login},dispatch);
}



export default connect(null,mapDispatchToProps)(Login);