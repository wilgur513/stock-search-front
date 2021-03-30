import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {
  createContainer,
  elementBySelector
} from "./domHelper";
import {AddFilterForm} from "../components/AddFilterForm";

describe('AddFilterForm', () => {
  let container, render;

  beforeEach(() => {
    ({container, render} = createContainer());
  });

  it('renders add filter button', () => {
    render(<AddFilterForm />);
    expect(elementBySelector('#addFilterButton')).not.toBeNull();
    expect(elementBySelector('#addFilterButton').value).toEqual('필터추가');
  });

  it('addFilterHandler will be fired when click add filter button', () => {
    const spy = jest.fn();
    render(<AddFilterForm addFilterHandler={spy}/>);
    ReactTestUtils.Simulate.click(elementBySelector('#addFilterButton'));

    expect(spy).toHaveBeenCalledTimes(1);
  });
});