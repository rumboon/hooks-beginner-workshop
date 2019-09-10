import React, { Component } from 'react';
import { Root, Fieldset } from '../styles/Filters';

class Filters extends Component {
    state = {
        employeeFunctions: [],
        filters: [],
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.employeeFunctions !== prevState.employeeFunctions) {
            const filters = this.state.employeeFunctions.map(empl => empl.id);

            this.setState({
                filters
            });

            this.setFilters(filters);
        }
    }

    fetchData = async () => {
        let result = [];
        
        try {
            const response = await fetch('http://localhost:5000/api/functions');
            result = await response.json();
        } catch(e) {
            console.error(e);
        }

        const setFilters = result.map(filter => filter.id);

        this.setState({
            employeeFunctions: result,
            filters: setFilters
        });

        this.setFilters(setFilters);
    }

    handleChange = (e) => {
        const { filters } = this.state;

        const newFilters = e.currentTarget.checked
            ? [...filters, e.currentTarget.id]
            : filters.filter(f => f !== e.currentTarget.id);

        this.setFilters(newFilters);
    }

    setFilters = (newFilters) => {        
        this.setState({
            filters: newFilters,
        });

        this.props.onFilter(newFilters);
    }


    render() {
        const { employeeFunctions } = this.state;

        return (
            <Root>
                {employeeFunctions.map(({ id, name }) => (
                    <Fieldset key={id}>
                        <label htmlFor={id}>{name}</label>
                        <input defaultChecked id={id} type="checkbox" onChange={this.handleChange} />
                    </Fieldset>
                ))}
            </Root>
        );
    }
}

export default Filters;
