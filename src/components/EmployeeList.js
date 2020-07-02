import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Header from './Header';
import EmployeesTable from './EmployeesTable';
import { setEmployeesList, deleteEmployee, setError } from '../actions'
import {getAllEmployees} from '../apiService'

const columns = {
    employee_name: "Name",
    employee_salary: "Salary",
    employee_age: "Age",
    profile_image: "Image",
    action: "action"
};

class EmployeeList extends React.PureComponent {
    getEmployees = async () => {
        try {
            const response = await getAllEmployees();
            if (response.status === "success") {
                setEmployeesList(response.data);
            } else {
                setError(response.data)
            }
        } catch (ex) {
            console.log(ex.toString());
        }
    };

    async componentDidMount() {
        await this.getEmployees();
    }

    // useEffect(() => {
    //     const init = async () => {
    //         await getEmployees();
    //     }

    //     init();
    // }, []);

    render() {
        return (
            <div>
                <Header title="Employees List" />
                <EmployeesTable data={this.props.list} columns={columns} deleteEmployee={deleteEmployee} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    list: state.employeesList
  });

const mapDispatchToProps = dispatch => ({
    setEmployeesList: (list) => dispatch(setEmployeesList(list)),
    deleteEmployee: (list) => dispatch(deleteEmployee(list)),
    setError: (list) => dispatch(setError(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList)