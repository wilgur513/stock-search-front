import React from 'react';

const FilterElement = ({expression}) =>{
  return(
    <li>
      {expression}
      <input type="button" value="X"></input>
    </li>
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

const AddFilter = () =>{
  return(
    <div>
      <input id='addFilter' type="button" value="필터추가"/>
    </div>
  )
}

export const AddFilterView = ({filterList}) => {
  return (
    <div id="addFilterView">
      <AddFilter />
      <ShowFilterView filterList={filterList}/>
    </div>
  )
}