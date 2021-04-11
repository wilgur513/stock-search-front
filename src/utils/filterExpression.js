const isCompareOperator = (value) => {
  return value.match(/^(<|>|<=|>=|==|!=)$/);
};

function Expression(expression=[]) {
  this.expression = expression;

  this.toString = () => expression.join(' ');

  this.add = (value) => {
    return new Expression(this.expression.concat([value]));
  };

  this.remove = () => {
    return new Expression(this.expression.splice(0, this.expression.length - 1));
  };

  this.hasExpression = () => this.expression.length > 0;

  this.isCorrect = () => {
    if (!this.hasExpression()) {
      return false;
    }

    return true;
  };
}

function CompareOperator(compare='') {
  this.compare = compare;

  this.toString = function() {
    return this.compare;
  };

  this.add = (value) => {
    return new CompareOperator(value);
  };

  this.remove = () => {
    return new CompareOperator('');
  };

  this.isUndefined = () => this.compare === '';
}

function FilterExpression(
    left=new Expression([]),
    right=new Expression([]),
    compare=new CompareOperator()) {
  this.left = left;
  this.right = right;
  this.compare = compare;

  this.addValue = (value) => {
    if (this.compare.isUndefined() && isCompareOperator(value)) {
      return new FilterExpression(this.left, this.right, this.compare.add(value));
    } else if (this.compare.isUndefined()) {
      return new FilterExpression(this.left.add(value), this.right, this.compare);
    } else if (!isCompareOperator(value)) {
      return new FilterExpression(this.left, this.right.add(value), this.compare);
    }
    return this;
  };

  this.remove = () => {
    if (this.right.hasExpression()) {
      return new FilterExpression(this.left, this.right.remove(), this.compare);
    } else if (!this.compare.isUndefined()) {
      return new FilterExpression(this.left, this.right, this.compare.remove());
    }
    return new FilterExpression(this.left.remove(), this.right, this.compare);
  };

  this.verify = () => {
    if (this.left.isCorrect() && this.right.isCorrect()) {
      return {
        isCorrect: true,
        message: '올바른 수식입니다.',
      };
    }

    return {
      isCorrect: false,
      message: '올바른 수식을 입력하세요.',
    };
  };

  this.toString = () => {
    return left.toString() + compare.toString() + right.toString();
  };
}

export const createFilterExpression = () => {
  return new FilterExpression();
};
