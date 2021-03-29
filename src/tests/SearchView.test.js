import React from 'react';
import ReactDOM from 'react-dom';
import { SearchView } from "../components/SearchView";


describe('SearchView', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
  });

  it('renders add filter button', () => {
    ReactDOM.render(<SearchView />, container);
    expect(container.querySelector('#addFilter')).not.toBeNull();
    expect(container.querySelector('#addFilter').value).toEqual('필터추가');
  });
});