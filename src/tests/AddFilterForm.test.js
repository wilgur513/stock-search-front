import React from 'react';
import {AddFilterForm} from '../components/AddFilterForm';
import axios from 'axios';
import {
  createContainer,
  elementBySelector, elementsBySelector,
} from './utils/domHelper';
import {
  change,
  click,
} from './utils/eventSimulate';

describe('AddFilterForm', () => {
  let render; let renderAndWait;

  const attributes = [{text: 'a', id: 'a'},
    {text: 'b', id: 'b'},
    {text: 'c', id: 'c'},
  ];

  beforeEach(() => {
    ({render, renderAndWait} = createContainer());
    jest.spyOn(axios, 'get').mockReturnValue(
        Promise.resolve({
          statusText: 'OK',
          status: 200,
          data: {attributes},
        }));
  });

  afterEach(() => {
    axios.get.mockRestore();
  });

  describe('render tests', () => {
    it('renders add filter button', async () => {
      await renderAndWait(<AddFilterForm />);
      expect(elementBySelector('#addFilterButton')).not.toBeNull();
      expect(elementBySelector('#addFilterButton').value).toEqual('필터추가');
    });

    it('renders operator buttons', async () => {
      await renderAndWait(<AddFilterForm />);
      const buttons = Array.from(elementsBySelector('#operatorButtons input[type="button"]'));
      const values = buttons.map((b) => b.value);
      expect(values).toEqual(expect.arrayContaining(['-', '+', '*', '/', '(', ')']));
    });

    it('renders compare operator buttons', async () => {
      await renderAndWait(<AddFilterForm />);
      const buttons = Array.from(elementsBySelector('#compareButtons input[type="button"]'));
      const values = buttons.map((b) => b.value);
      expect(values).toEqual(expect.arrayContaining(['<', '>', '<=', '>=', '==', '!=']));
    });

    it('renders attribute buttons after fetch data', async () => {
      await renderAndWait(<AddFilterForm />);
      const buttons = Array.from(elementsBySelector('#attributeButtons input[type="button"]'));
      const values = buttons.map((b) => b.value);
      const expectedValues = attributes.map((a) => a.text);
      expect(values).toEqual(expect.arrayContaining(expectedValues));
    });

    it('renders filter expression area', async () => {
      await renderAndWait(<AddFilterForm />);
      const area = elementBySelector('#filterExpression');
      expect(area).not.toBeNull();
    });

    it('renders backspace button to remove expression', async () => {
      await renderAndWait(<AddFilterForm />);
      const button = elementBySelector('#removeButton');
      expect(button).not.toBeNull();
    });

    it('renders constant number button to input constant number', async () => {
      await renderAndWait(<AddFilterForm />);
      const number = elementBySelector('#constantNumber');
      const button = elementBySelector('#constantNumberButton');
      expect(number).not.toBeNull();
      expect(button).not.toBeNull();
    });
  });

  describe('event tests', () => {
    it('addFilterHandler will be fired when click add filter button', async () => {
      const spy = jest.fn();
      await renderAndWait(<AddFilterForm addFilterHandler={spy} />);
      click(elementBySelector('#addFilterButton'));

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(expect.any(Object));

      expect(spy).toHaveBeenCalledWith(expect.objectContaining({
        expression: expect.any(String),
        id: expect.any(Number), // date.now() == Number
        name: expect.any(String),
      }));
    });

    it('addFilterForm fetch attributes button data from server', async () => {
      await renderAndWait(<AddFilterForm />);
      expect(axios.get).toHaveBeenCalledWith(process.env.REACT_APP_FETCH_ATTRIBUTE_URL);
    });

    it('render operator into filter expression area when click operator button', async () => {
      await renderAndWait(<AddFilterForm />);
      click(elementsBySelector('#operatorButtons input[type="button"]')[0]);
      click(elementsBySelector('#operatorButtons input[type="button"]')[0]);
      click(elementsBySelector('#operatorButtons input[type="button"]')[1]);
      expect(elementBySelector('#filterExpression').textContent).toEqual('++-');
    });

    it('render compare operator into filter expression area when click compare operator button', async () => {
      await renderAndWait(<AddFilterForm />);
      click(elementsBySelector('#compareButtons input[type="button"]')[0]);
      expect(elementBySelector('#filterExpression').textContent).toEqual('<');
    });

    it('remove expression when click remove button', async () => {
      await renderAndWait(<AddFilterForm />);
      click(elementsBySelector('#operatorButtons input[type="button"]')[0]);
      click(elementsBySelector('#operatorButtons input[type="button"]')[0]);
      click(elementsBySelector('#operatorButtons input[type="button"]')[1]);
      click(elementBySelector('#removeButton'));
      expect(elementBySelector('#filterExpression').textContent).toEqual('++');
    });

    it('change constant number and add to expression', async () => {
      await renderAndWait(<AddFilterForm />);
      change(elementBySelector('#constantNumber'), {target: {value: '10'}});
      click(elementBySelector('#constantNumberButton'));
      expect(elementBySelector('#filterExpression').textContent).toEqual('10');
    });
  });
});
