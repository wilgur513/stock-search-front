import ReactTestUtils from 'react-dom/test-utils';

export const click = (element, targetEvent) => ReactTestUtils.Simulate.click(element, targetEvent);
