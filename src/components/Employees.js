import React from 'react';
import Employee from './Employee';
import { searchFilter } from '../utils/employees';
import { List, ListItem } from '../styles/Employees';
import useFetch from '../hooks/useFetch';

const Employees = ({ searchValue, filters }) => {
    const [filteredEmployees, setFilteredEmployees] = React.useState();
    const employees = useFetch('http://localhost:5000/api/employees');

    React.useEffect(() => {
        if (!employees || !employees.length) return;
        
        setFilteredEmployees(employees
            .filter(employee => filters.includes(employee.function))
            .filter(searchFilter(searchValue))
        );

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