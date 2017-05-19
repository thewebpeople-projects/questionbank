import React from 'react';

var Header= require('Header');
var Footer=require('Footer');
var Home=require('Home');



class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>          
        );
    }
}

export default App;