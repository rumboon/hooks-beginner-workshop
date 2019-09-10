import React, { Component } from 'react';
import Search from './Search';
import Filters from './Filters';
import Employees from './Employees';

class App extends Component {
  
  state = {
    searchValue: '',
    filters: [],
  }

  setSearchValue = (searchValue) => {
    this.setState({
      searchValue
    });
  }

  setFilters = (filters) => {
    this.setState({
      filters
    })
  };

  render() {
    const { searchValue, filters } = this.state;
    
    return (
      <div>
        <Search onSearch={this.setSearchValue} />
        <Filters onFilter={this.setFilters} />
        <Employees searchValue={searchValue} filters={filters} />
      </div>
    );
  }

}

export default App;
