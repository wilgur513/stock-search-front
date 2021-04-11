import ReactTestUtils from 'react-dom/test-utils';

export const click = (element, targetEvent) => ReactTestUtils.Simulate.click(element, targetEvent);
export const change = (element, targetEvent) => ReactTestUtils.Simulate.change(element, targetEvent);
