import React from 'react';

export const AddFilterView = ({addFilter}) =>{
  return(
    <div id="addFilterView">
      <input type="button" onClick ={addFilter} value="test"/>
    </div>
  )
}