import React from 'react';
import Users from './Users';
import Search from './Search';

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <div>
      <Search onSearch={setSearchValue} />
      <Users searchValue={searchValue} />
    </div>
  );
}

export default App;
