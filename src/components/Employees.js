import React from 'react';
import styled from 'styled-components';
import Employee from './Employee';
import { getEmployees, searchFilter } from '../utils/Employees';

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li`
    margin: 0;
    padding: 0;
    background-color: ${props => props.isOdd ? 'AntiqueWhite' : 'CornSilk'};
`;

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