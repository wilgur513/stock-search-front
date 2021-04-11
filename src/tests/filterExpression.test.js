import {createFilterExpression} from '../utils/filterExpression';

describe('filter expression test', () => {
  let expression;
  let expForVerify;

  beforeEach(() => {
    expression = createFilterExpression();
    expForVerify = createFilterExpression()
        .addValue('a').addValue('+').addValue('c')
        .addValue('==');
  });

  it('add value to left expression', () => {
    const newExpression = expression.addValue('a');
    expect(newExpression.left.toString()).toEqual('a');
  });

  it('add compare operator', () => {
    const newExpression = expression.addValue('<=');
    expect(newExpression.compare.toString()).toEqual('<=');
  });

  it('not add to compare operator with not selected operator', () => {
    let newExpression = expression.addValue('|=');
    expect(newExpression.compare.isUndefined()).toBeTruthy();

    newExpression = expression.addValue('=<');
    expect(newExpression.compare.isUndefined()).toBeTruthy();

    newExpression = expression.addValue('*=');
    expect(newExpression.compare.isUndefined()).toBeTruthy();
  });

  it('add value to right after compare operator is defined', () => {
    const expressionWithLeft = expression.addValue('a').addValue('+').addValue('b');
    const expressionWithCompare = expressionWithLeft.addValue('<');
    const expressionWithRight = expressionWithCompare.addValue('c').addValue('+').addValue('a');

    expect(expressionWithRight.left.toString()).toEqual('a+b');
    expect(expressionWithRight.compare.toString()).toEqual('<');
    expect(expressionWithRight.right.toString()).toEqual('c+a');
  });

  it('remove value from left expression', () => {
    const withLeft = expression.addValue('a').addValue('+').addValue('c');
    let removed = withLeft.remove();
    expect(removed.left.toString()).toEqual('a+');
    removed = removed.remove();
    expect(removed.left.toString()).toEqual('a');
  });

  it('remove compare when defined compare operator', () => {
    const withCompare = expression.addValue('a').addValue('+').addValue('c').addValue('==');
    let removed = withCompare.remove();
    expect(removed.left.toString()).toEqual('a+c');
    expect(removed.compare.toString()).toEqual('');
    removed = removed.remove();
    expect(removed.left.toString()).toEqual('a+');
    expect(removed.compare.toString()).toEqual('');
  });

  it('remove right expression after compare operator defined', () => {
    const withRight = expression
        .addValue('a').addValue('+').addValue('c')
        .addValue('==')
        .addValue('b').addValue('-');
    let removed = withRight.remove();
    expect(removed.left.toString()).toEqual('a+c');
    expect(removed.compare.toString()).toEqual('==');
    expect(removed.right.toString()).toEqual('b');

    removed = removed.remove();
    expect(removed.left.toString()).toEqual('a+c');
    expect(removed.compare.toString()).toEqual('==');
    expect(removed.right.toString()).toEqual('');

    removed = removed.remove();
    expect(removed.left.toString()).toEqual('a+c');
    expect(removed.compare.toString()).toEqual('');
    expect(removed.right.toString()).toEqual('');
  });

  it('verify empty expression', () => {
    expect(expression.verify().isCorrect).toBeFalsy();
  });

  it('verify right is empty expression', () => {
    const newExpression = expression.addValue('a').addValue('==');
    expect(newExpression.verify().isCorrect).toBeFalsy();
  });

  it('verify correct expression', () => {
    const newExpression = expression.addValue('a').addValue('>').addValue('b');
    expect(newExpression.verify().isCorrect).toBeTruthy();
  });
});
