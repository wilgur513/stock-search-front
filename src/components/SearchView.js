import React from 'react';
import {AddFilterView} from "./AddFilterView";
import {ResultView} from "./ResultView";

export const SearchView = ({filterList=[]}) => {
  return (
    <div id="SearchViewDiv">
      <AddFilterView filterList={filterList}/>
      <ResultView filterList={filterList}/>
    </div>
  );
}