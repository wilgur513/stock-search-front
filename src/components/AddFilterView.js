import React from 'react';

const FilterElement = ({expression, id, removeFilter}) =>{
  const removeFilterHandler = ()=>{
    removeFilter(id)
  }

  return(
    <li>
      {expression}
      <input type="button" value="X" onClick={removeFilterHandler}></input>
    </li>
  )
}

const ScrollFilterView = ({filterList, removeFilter}) => {
  return(
    <div id="scrollFilterView" >
      <ul id='filterList'>
        {filterList.map(list => <FilterElement key={list.id} {...list} removeFilter={removeFilter}/>)}
      </ul>
    </div>
  )
}

const ShowFilterView = ({filterList, removeFilter})=> {
  return (
    <div id="showFilterView">
      <ScrollFilterView filterList={filterList} removeFilter={removeFilter}/>
    </div>
  )
}

const AddFilter = ({addFilter}) =>{
  const addFilterHandler = ()=>{
    addFilter({ expression: 'hello', id: Date.now(), name:'hello' })
  }

  return(
    <div>
      <input id='addFilter' type="button" value="필터추가" onClick={addFilterHandler}/>
    </div>
  )
}

export const AddFilterView = ({filterList, addFilter, removeFilter}) => {
  return (
    <div id="addFilterView">
      <AddFilter addFilter={addFilter} />
      <ShowFilterView filterList={filterList} removeFilter={removeFilter}/>
    </div>
  )
}