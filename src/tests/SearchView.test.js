import React from 'react';
import ReactDOM from 'react-dom';
import { SearchView } from "../components/SearchView";


describe('SearchView', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    ReactDOM.render(<SearchView />, container);
  });

  it('renders addFilterView, showFilterView ', ()=>{
    expect(container.querySelector('#addFilterView')).not.toBeNull();
    expect(container.querySelector('#showFilterView')).not.toBeNull();
  })
  it('renders add filter button', () => {
    expect(container.querySelector('#addFilter')).not.toBeNull();
    expect(container.querySelector('#addFilter').value).toEqual('필터추가');
  });
});