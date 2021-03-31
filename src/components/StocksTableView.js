import React from 'react';

const Attributes = ({filterList}) => (
  filterList.map((list) => (
    <th key={list.id} id={list.id} data-expression={list.expression}>
      {' '}
      {list.name}
      {' '}
    </th>
  ))
);

const TableHead = ({filterList}) => (
  <thead>
    <tr>
      <Attributes filterList={filterList} />
    </tr>
  </thead>
);

const TableBody = () => (
  <tbody>
    <tr>
      <td />
    </tr>
  </tbody>
);

export const StocksTableView = ({filterList}) => (
  <table>
    <TableHead filterList={filterList} />
    <TableBody />
  </table>
);
