import React from 'react';

const FilterElement = ({name, expression, id, removeFilter}) =>{
  const removeFilterHandler = ()=>{
    removeFilter(id)
  }

  return(
    <li>
      {name}
      {expression}
      <input type="button" value="x" onClick={removeFilterHandler}></input>
    </li>
  )
}

export const FilterListView = ({filterList=[], removeFilterHandler})=> {
  return (
    <div id='filterListView'>
      <ul id='filterList'>
        {filterList.map(list => <FilterElement key={list.id} {...list} removeFilter={removeFilterHandler}/>)}
      </ul>
    </div>
  )
}