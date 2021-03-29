import React from 'react';
import ReactDOM from 'react-dom';
import { ShowFilterView } from '../components/ShowFilterView';


describe('ShowFilterView', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    ReactDOM.render(<ShowFilterView />, container);
  });

  it('renders ScrollDiv View', () => {
    expect(container.querySelector('#scrollFilterView')).not.toBeNull();
  });
});