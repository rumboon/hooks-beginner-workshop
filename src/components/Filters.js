import React from 'react';
import styled from 'styled-components';
import { getEmployeeFunctions } from '../utils/Employees';

const Root = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const Fieldset = styled.div`
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0.25rem;
`;

const Filters = ({onFilter, ...props}) => {
    const [employeeFunctions, setEmployeeFunctions] = React.useState([]);
    const [filters, setFilters] = React.useState([]);

    React.useEffect(() => {
        getEmployeeFunctions().then((employeeFunctions) => {
            setEmployeeFunctions(employeeFunctions);
            const filters = employeeFunctions.reduce((arr, f) => [...arr, f.id], []);
            setFilters(filters);
            onFilter(filters);
        });
    }, [onFilter]);

    const handleChange = (e) => {
        const newFilters = e.currentTarget.checked
            ? [...filters, e.currentTarget.id]
            : filters.filter(f => f !== e.currentTarget.id);

        setFilters(newFilters);
        onFilter(newFilters);
    }

    return (
        <Root>
            {employeeFunctions.map(({ id, name }) => (
                <Fieldset key={id}>
                    <label htmlFor={id}>{name}</label>
                    <input defaultChecked id={id} type="checkbox" onChange={handleChange} />
                </Fieldset>
            ))}
        </Root>
    );
}

export default Filters;