import React, {useState} from 'react';
import { AddFilterView } from './components/AddFilterView';
import {SearchView} from "./components/SearchView";

function App() {
  // const filterList =  [ { expression: 'hello', id: '1' , name:"테스트"}, { expression: 'hi', id: '2', name:"테스트2"} ];
  const [filterList, addFilterList] = useState([])

  const addFilter = ({filter})=>{
    addFilterList(filter)
  }

  return (
    <div> 
      <SearchView filterList={filterList}/>
    </div>
  );
}

export default App;
