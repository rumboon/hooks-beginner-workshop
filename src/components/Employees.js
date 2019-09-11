import React, { Component } from 'react';
import Employee from './Employee';
import { searchFilter } from '../utils/employees';
import { List, ListItem } from '../styles/Employees';

class Employees extends Component {
    state = {
        filteredEmployees: undefined,
        employees: [],
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        const { searchValue, filters} = this.props;

        if (searchValue !== prevProps.searchValue || filters !== prevProps.filters) {
            this.setFilteredEmployees();
        }
    }

    fetchData = async () => {
        let result = [];

        try {
            const response = await fetch('http://localhost:5000/api/employees');
            result = await response.json();
        } catch(e) {
            console.error(e);
        }

        this.setState({
            employees: result
        });
    }

    setFilteredEmployees = () => {
        const { employees } = this.state;
    
        const filteredData = employees
            .filter(employee => this.props.filters.includes(employee.function))
            .filter(searchFilter(this.props.searchValue));
        
        if (filteredData.length > 0) {
            this.setState({
                filteredEmployees: filteredData
            });
        }
    }

    render() {
        const { filteredEmployees, employees } = this.state;

        return (
            <List>
                {(filteredEmployees || employees).map((employee, i) => (
                    <ListItem key={employee.id} isOdd={Boolean(i % 2)}>
                        <Employee {...employee} />
                    </ListItem>
                ))}
            </List>
        );
    }
    
}

export default Employees;