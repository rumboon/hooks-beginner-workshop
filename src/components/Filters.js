import React from 'react';
import { Root, Fieldset } from '../styles/Filters';
import useFetch from '../hooks/useFetch';

const Filters = ({onFilter, ...props}) => {
    const employeeFunctions = useFetch('http://localhost:5000/api/functions');
    const [filters, setFilters] = React.useState([]);

    React.useEffect(() => {
        const filters = employeeFunctions.reduce((arr, f) => [...arr, f.id], []);
        setFilters(filters);
        onFilter(filters);
    }, [employeeFunctions, onFilter]);

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