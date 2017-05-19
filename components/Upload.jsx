import React from 'react';
import { findDOMNode, ReactDOM } from 'react-dom';

$(document).ready(function() {
    $('select').material_select();
})

class Upload extends React.Component{
    constructor(props){
        super(props);
        this.state={
            degree:"",
            course:'',
            sem:'',
            exam:'',
            sub:'',
            college:''
        }
    }
    componentDidMount() {
//        $('select').material_select();
//        $(ReactDOM.findDOMNode('select')).material_select();
    }
    verifyCollege(event){
        var value=event.target.value;
    }
    verifySubject(event){
        var value=event.target.value;
        
    }
    submit(){
        alert(this.state.degree);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.upload}>
                    <div className="row">
                        <div className="file-field input-field col s12">
                            <div className="btn">
                                <span>File</span>
                                <input type="file"/>
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" placeholder="Select File"/>
                            </div>

                        </div>
                        <div className="input-field col s4">
                            <select className="browser-default" value={this.state.degree} 
                                onChange={event=>this.setState({degree:event.target.value})}>
                                <option value="" disabled>Choose Degree</option>
                                <option value="B.E">B.E</option>
                                <option value="B.Tech">B.Tech</option>
                            </select>
                        </div>
                        <div className="input-field col s4">
                            <select className="browser-default" value={this.state.course} 
                                onChange={event=>this.setState({course:event.target.value})}>
                                <option value="" disabled >Choose Course</option>
                                <option value="EC">EC</option>
                                <option value="CS">CS</option>
                                <option value="IS">IS</option>
                                <option value="E&E">E&amp;E</option>
                                <option value="Mech">Mech</option>
                                <option value="Civil">Civil</option>
                                <option value="Aeronautical">Aeronautical</option>
                                <option value="Architecture">Architecture</option>
                                <option value="Chemical">Chemical</option>
                                <option value="BioMedical">BioMedical</option>
                            </select>
                        </div>
                        <div className="input-field col s4">
                            <select className="browser-default" value={this.state.sem} 
                                onChange={event=>this.setState({sem:event.target.value})}>
                                <option value="" disabled >Choose Semester</option>
                                <option value="Physics">Physics</option>
                                <option value="Chemistry">Chemistry</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </div>
                        <div className="input-field col s4">
                            <select className="browser-default" value={this.state.exam} 
                                onChange={event=>this.setState({exam:event.target.value})}>
                                <option value="" disabled >Choose Exam</option>
                                <option value="i1">Internal 1</option>
                                <option value="i2">Internal 2</option>
                                <option value="i3">Internal 3</option>
                                <option value="external">External</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <label htmlFor="subject_name">Enter Full name of Subject</label>
                            <input  id="subject_name" type="text" className="validate" onblur={()=>this.verifySubject}/>
                        </div>
                        <div className="input-field col s6">
                            <label htmlFor="college_name">Enter your college Name</label>
                            <input  id="college_name" type="text" className="validate" onblur={()=>this.verifyCollege}/>
                        </div>
                    </div>
                    <div className="row center-align">
                        <input className="waves-effect waves-light btn centre-align" type="button" onClick={()=>this.submit} value="Submit"/>
                    </div>
                </form>
            </div>
        );
    }
}

module.exports= Upload;