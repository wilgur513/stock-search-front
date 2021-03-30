import React from 'react';
import ReactDOM from 'react-dom';

let container;

export const elementBySelector = (selector) => container.querySelector(selector);

export const elementsBySelector = (selector) => container.querySelectorAll(selector);

export const createContainer = () => {
  container = document.createElement('div');
  const render = component => ReactDOM.render(component, container);

  return {
    container,
    render
  }
}