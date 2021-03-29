import React from 'react';

const ResultView = ({filterList})=>{
  const Attributes = ()=>{  //이름, 수식, 아이디
    return(
      filterList.map(list => <th key={list.id} id={list.id} data-expression={list.expression}> {list.name} </th>)
    )
  }

  return(
    <div id="resultView">
      <table>
        <thead>
          <tr>
            <Attributes />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
const FilterElement = ({expression}) =>{

  const DeleteButton = ()=>{
    return(
      <input type="button" value="X"></input>
    )
  }
  
  return(
    <li>{expression} <DeleteButton/></li>
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

const AddFilterButton = () => {
  return (
    <div id="addFilterView">
      <input type='button' id='addFilter' value='필터추가'/>
    </div>
  )
}

export const SearchView = ({filterList=[]}) => {
  return (
    <div id="SearchViewDiv">
      <AddFilterButton />
      <ShowFilterView filterList={filterList}/>
      <ResultView filterList={filterList}/>
    </div>
  );
}