import React, {useState} from 'react';
import {AddFilterView} from "./AddFilterView";
import {ResultView} from "./ResultView";

export const SearchView = () => {
  const [filterList, setFilterList] = useState([])

  const addFilter = (filter)=>{
    setFilterList(filterList.concat([filter]))
  }

  const removeFilter = (filter) =>{
    setFilterList(filterList.filter(f=>f.id !== filter.id))
  }
  return (
    <div id="SearchViewDiv">
      <AddFilterView filterList={filterList} addFilter={addFilter} removeFilter={removeFilter}/>
      <ResultView filterList={filterList}/>
    </div>
  );
}