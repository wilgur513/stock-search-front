import React from 'react';

const FilterElement = ({
  name, expression, id, removeFilter,
}) => {
  const removeFilterHandler = () => {
    removeFilter(id);
  };

  return (
    <li>
      {name}
      {expression}
      <input type="button" value="x" onClick={removeFilterHandler} />
    </li>
  );
};

export const FilterListView = ({filterList = [], removeFilterHandler}) => (
  <div id="filterListView">
    <ul id="filterList">
      {filterList.map((list) => <FilterElement key={list.id} {...list} removeFilter={removeFilterHandler} />)}
    </ul>
  </div>
);
