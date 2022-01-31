import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

class ListEmployee extends Component {
    constructor(porps) {
        super(porps)

        this.state = {
            employees: []
        }
    }
    // navigate = useNavigate();

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data})
        })
    }
    
    render () {
        return (
            <div>
                <h2 className='text-center'>Employee List</h2>
                <div className='row' style={{width: 200,marginBottom: 10}}>
                    <Link className='btn btn-primary' to={'/add-employee'}>Add Employee</Link>
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    emp =>
                                    <tr key={emp.id}>
                                        <td>
                                            {emp.firstname}
                                        </td>
                                        <td>
                                            {emp.lastname}
                                        </td>
                                        <td>
                                            {emp.email}
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListEmployee;