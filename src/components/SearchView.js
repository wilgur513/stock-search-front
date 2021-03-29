import React from 'react';
import { ShowFilterView } from './ShowFilterView';

export const SearchView = () => {
  return (
    <div id="SeacrchViewDiv">
      <div id="addFilterView">
        <input type='button' id='addFilter' value='필터추가'/>
      </div>
      <ShowFilterView />
    </div>
  );
}