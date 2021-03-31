import React from 'react';
import {AddFilterForm} from '../components/AddFilterForm';
import {
  createContainer,
  elementBySelector,
} from './utils/domHelper';
import {
  click,
} from './utils/eventSimulate';

describe('AddFilterForm', () => {
  let render;

  beforeEach(() => {
    ({render} = createContainer());
  });

  it('renders add filter button', () => {
    render(<AddFilterForm />);
    expect(elementBySelector('#addFilterButton')).not.toBeNull();
    expect(elementBySelector('#addFilterButton').value).toEqual('필터추가');
  });

  it('addFilterHandler will be fired when click add filter button', () => {
    const spy = jest.fn();
    render(<AddFilterForm addFilterHandler={spy} />);
    click(elementBySelector('#addFilterButton'));

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(expect.any(Object));

    expect(spy).toHaveBeenCalledWith(expect.objectContaining({
      expression: expect.any(String),
      id: expect.any(Number), // date.now() == Number
      name: expect.any(String),
    }));
  });
});
