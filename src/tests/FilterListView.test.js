import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {FilterListView} from "../components/FilterListView";
import {
  createContainer,
  elementBySelector,
  elementsBySelector
} from "./domHelper";


describe('SearchView', () => {
  let container, render;

  const filterList =  [ { expression: 'exp1', id: '1', name:'hello' }, { expression: 'exp2', id: '2', name:'hi' } ];

  beforeEach(() => {
    ({render, container} = createContainer());
  });

  it('renders filterListView and filterList', ()=>{
    render(<FilterListView />);
    expect(elementBySelector('#filterListView')).not.toBeNull();
    expect(elementBySelector('#filterList')).not.toBeNull();
  });

  it('renders filterList', () => {
    render(<FilterListView filterList={filterList} />);
    const filters = elementsBySelector('#filterList li');

    expect(filters.length).toEqual(2);
    expect(filters[0].textContent).toMatch('hello');
    expect(filters[0].textContent).toMatch('exp1');
    expect(filters[1].textContent).toMatch('hi');
    expect(filters[1].textContent).toMatch('exp2');
  });

  it('removeFilterHandler will be fired when remove button clicked', () => {
    const spy = jest.fn();
    render(<FilterListView filterList={filterList} removeFilterHandler={spy} />);
    const removeButtons = elementsBySelector('#filterList li input[type="button"]');
    ReactTestUtils.Simulate.click(removeButtons[0]);

    expect(spy).toHaveBeenCalledWith('1');
  });
});