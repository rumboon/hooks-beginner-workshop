import React from 'react';
import Employee from './Employee';
import { getEmployees, searchFilter } from '../utils/employees';
import { List, ListItem } from '../styles/Employees';

const Employees = ({ searchValue, filters }) => {
    const [employees, setEmployees] = React.useState([]);
    const [filteredEmployees, setFilteredEmployees] = React.useState();

    React.useEffect(() => {
        getEmployees().then(setEmployees);
    }, []);

    React.useEffect(() => {
        let filteredEmployees = employees.filter(employee => filters.includes(employee.function));
        
        if (searchValue) {
            filteredEmployees = searchFilter(filteredEmployees, searchValue);
        }
        
        setFilteredEmployees(filteredEmployees);

    }, [searchValue, filters, employees]);

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

export default Employees;