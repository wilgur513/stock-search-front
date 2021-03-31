import React, {useState} from 'react';
import {AddFilterForm} from './AddFilterForm';
import {FilterListView} from './FilterListView';
import {StocksTableView} from './StocksTableView';

export const StockSearchView = () => {
  const [filterList, setFilterList] = useState([]);

  const addFilterHandler = (filter) => {
    setFilterList(filterList.concat([filter]));
  };

  const removeFilterHandler = (id) => {
    setFilterList(filterList.filter((f) => f.id !== id));
  };

  return (
    <div>
      <AddFilterForm addFilterHandler={addFilterHandler} />
      <FilterListView filterList={filterList} removeFilterHandler={removeFilterHandler} />
      <StocksTableView filterList={filterList} />
    </div>
  );
};
