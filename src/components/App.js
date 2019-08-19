import React from 'react';
import Search from './Search';
import Filters from './Filters';
import Employees from './Employees';

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [filters, setFilters] = React.useState([]);

  return (
    <div>
      <Search onSearch={setSearchValue} />
      <Filters onFilter={setFilters} />
      <Employees searchValue={searchValue} filters={filters} />
    </div>
  );
}

export default App;
