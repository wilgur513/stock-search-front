import React from 'react';

const FilterElement = ({expression}) =>{
  return(
    <li>{expression}</li>
  )
}

const ScrollFilterView = ({filterList}) => {
  return(
    <div id="scrollFilterView" >
      <ul id='filterList'>
        {filterList.map(list => <FilterElement key={list.id} {...list} />)}
      </ul>
    </div>
  )
}

const ShowFilterView = ({filterList})=> {
  return (
    <div id="showFilterView">
      <ScrollFilterView filterList={filterList}/>
    </div>
  )
}

const AddFilterButton = () => {
  return (
    <div id="addFilterView">
      <input type='button' id='addFilter' value='필터추가'/>
    </div>
  )
}

export const SearchView = ({filterList=[]}) => {
  return (
    <div id="SearchViewDiv">
      <AddFilterButton />
      <ShowFilterView filterList={filterList}/>
    </div>
  );
}