import React from 'react';
import ReactDOM from 'react-dom';
import { SearchView } from "../components/SearchView";


describe('SearchView', () => {
  let container;

  const elementBySelector = selector => container.querySelector(selector);
  const render = component => ReactDOM.render(component, container);
  beforeEach(() => {
    container = document.createElement('div');
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

  it('renders filter elements in ul', () => {
    const filterList =  [ { expression: 'hello', id: '1' }, { expression: 'hi', id: '2' } ];
    render(<SearchView filterList={filterList} />);
    const lists = container.querySelectorAll('#filterList li');

    expect(lists.length).toEqual(2);
    expect(lists[0].textContent).toMatch('hello');
    expect(lists[1].textContent).toMatch('hi');
  });
});