import React from "react";

const TableAttributes = ({filterList}) => (
  filterList.map(list => <th key={list.id} id={list.id} data-expression={list.expression}> {list.name} </th>)
)

const TableHead = ({filterList}) => (
  <thead>
    <tr>
      <TableAttributes filterList={filterList} />
    </tr>
  </thead>
)

const TableBody = () => (
  <tbody>
    <tr>
      <td />
    </tr>
  </tbody>
)

const ResultTable = ({filterList}) => (
  <table>
    <TableHead filterList={filterList} />
    <TableBody />
  </table>
)

export const ResultView = ({filterList})=>{
  return(
    <div id="resultView">
      <ResultTable filterList={filterList}/>
    </div>
  )
}
