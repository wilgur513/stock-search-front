import React from 'react';
import { SearchView } from "../components/SearchView";
import {
  createContainer,
  elementBySelector,
} from "./domHelper";


describe('SearchView', () => {
  let container, render;

  const filterList =  [ { expression: 'hello', id: '1', name:'hello' }, { expression: 'hi', id: '2', name:'hi' } ];

  beforeEach(() => {
    ({render, container} = createContainer());
  });

  it('renders addFilterView, showFilterView ', ()=>{
    render(<SearchView />);
    expect(elementBySelector('#addFilterView')).not.toBeNull();
    expect(elementBySelector('#showFilterView')).not.toBeNull();
  });

  it('renders add filter button', () => {
    render(<SearchView />);
    expect(elementBySelector('#addFilter')).not.toBeNull();
    expect(elementBySelector('#addFilter').value).toEqual('필터추가');
  });

  it('renders ul for filter list', () => {
    render(<SearchView />);
    expect(elementBySelector('#filterList')).not.toBeNull();
    expect(elementBySelector('#filterList').tagName).toEqual('UL');
  });
});