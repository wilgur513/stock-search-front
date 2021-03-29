import React from 'react';
import {SearchView} from "./components/SearchView";

function App() {
  const filterList =  [ { expression: 'hello', id: '1' }, { expression: 'hi', id: '2' } ];

  return (
    <SearchView filterList={filterList}/>
  );
}

export default App;
