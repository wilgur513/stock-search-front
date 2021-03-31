import React from 'react';

export const AddFilterForm = ({addFilterHandler}) => {
  const onClick = () => {
    addFilterHandler({expression: 'hello', id: Date.now(), name: 'hello'});
  };

  return (
    <form id="addFilterForm">
      <input
        id="addFilterButton"
        type="button"
        value="필터추가"
        onClick={onClick}
      />
    </form>
  );
};
