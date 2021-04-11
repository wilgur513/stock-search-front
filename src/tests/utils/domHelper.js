import React from 'react';
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';

let container;

export const elementBySelector = (selector) => container.querySelector(selector);

export const elementsBySelector = (selector) => container.querySelectorAll(selector);

export const createContainer = () => {
  container = document.createElement('div');

  const render = (component) => {
    act(() => {
      ReactDOM.render(component, container);
    });
  };

  const renderAndWait = async (component) => {
    await act(async () => {
      await ReactDOM.render(component, container);
    });
  };

  return {
    container,
    render,
    renderAndWait,
  };
};
