import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {createFilterExpression} from '../utils/filterExpression';

const AttributeButton = ({text}) => (
  <input type='button' value={text} />
);

const AttributeButtons = ({attributes, addToExpression}) => {
  const [number, setNumber] = useState(0);
  const changeNumber = (e) => {
    setNumber(e.target.value);
  };

  const onClick = () => {
    addToExpression('' + number);
  };

  return (
    <div id='attributeButtons'>
      <input type='number' id='constantNumber' onChange={changeNumber}/>
      <input type='button' id='constantNumberButton' value='상수입력' onClick={onClick}/>
      {attributes.map((a) => <AttributeButton key={a.id} text={a.text} id={a.id}/>)}
    </div>
  );
};

const OperatorButtons = ({addToExpression}) => {
  const onClick = (e) => {
    addToExpression(e.target.value);
  };

  return (
    <div id='operatorButtons'>
      <input type='button' value='+' onClick={onClick}/>
      <input type='button' value='-' onClick={onClick}/>
      <input type='button' value='*' onClick={onClick}/>
      <input type='button' value='/' onClick={onClick}/>
      <input type='button' value='(' onClick={onClick}/>
      <input type='button' value=')' onClick={onClick}/>
    </div>
  );
};

const CompareButtons = ({addToExpression}) => {
  const onClick = (e) => {
    addToExpression(e.target.value);
  };

  return (
    <div id='compareButtons'>
      <input type='button' value='<' onClick={onClick}/>
      <input type='button' value='>' onClick={onClick}/>
      <input type='button' value='<=' onClick={onClick}/>
      <input type='button' value='>=' onClick={onClick}/>
      <input type='button' value='==' onClick={onClick}/>
      <input type='button' value='!=' onClick={onClick}/>
    </div>
  );
};

const FilterExpression = ({expression}) => (
  <div id='filterExpression'>
    {expression.toString()}
  </div>
);

const RemoveButton = ({removeFromExpression}) => (
  <input type='button' value='제거' id='removeButton' onClick={removeFromExpression} />
);

const AddFilterButton = ({addFilter}) => (
  <input
    id="addFilterButton"
    type="button"
    value="필터추가"
    onClick={addFilter}
  />
);

export const AddFilterForm = ({addFilterHandler}) => {
  const [attributes, setAttributes] = useState([]);
  const [expression, setExpression] = useState(createFilterExpression());

  useEffect(() => {
    const fetchAttribute = async () => {
      const result = await axios.get(process.env.REACT_APP_FETCH_ATTRIBUTE_URL);

      if (result.status == 200) {
        setAttributes(result.data.attributes);
      }
    };

    fetchAttribute();
  }, []);

  const addFilter = () => {
    addFilterHandler({expression: 'hello', id: Date.now(), name: 'hello'});
  };

  const addToExpression = (value) => {
    setExpression(expression.addValue(value));
  };

  const removeFromExpression = () => {
    setExpression(expression.remove());
  };

  return (
    <div id='addFilterForm'>
      <AttributeButtons attributes={attributes} addToExpression={addToExpression}/>
      <OperatorButtons addToExpression={addToExpression}/>
      <CompareButtons addToExpression={addToExpression}/>
      <FilterExpression expression={expression}/>
      <RemoveButton removeFromExpression={removeFromExpression}/>
      <AddFilterButton addFilter={addFilter} />
    </div>
  );
};
