import React, { Component } from 'react';

class CreateEmployee extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    changeFirstNameHandler = (event) => {
        
        this.setState({firstname: event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastname: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }

    saveEmployee = (e) =>{
        e.preventDefault();
        let employee = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
        }

        console.log('employee => ' + JSON.stringify(employee));
    }

    cancel() {
        console.log("cancel");
        this.props.router.push("/employees");
    }

    render () {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3'>
                            <h3 className='text-center'>Add Employee</h3>
                            <div className='card-body'>
                                <div className='form-group'>
                                    <label>First Name</label>
                                    <input placeholder='First Name' name='firstname' className='form-control'
                                    value={this.state.firstname} onChange={this.changeFirstNameHandler} />
                                </div>
                                <div className='form-group' style={{margin: '10px 0'}}>
                                    <label>Last Name</label>
                                    <input placeholder='Last Name' name='lastname' className='form-control'
                                    value={this.state.lastname} onChange={this.changeLastNameHandler} />
                                </div>
                                <div className='form-group' style={{margin: '10px 0'}}>
                                    <label>Email</label>
                                    <input placeholder='Email' name='email' className='form-control'
                                    value={this.state.email} onChange={this.changeEmailHandler} />
                                </div>
                                <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
                                <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: 10}}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateEmployee;