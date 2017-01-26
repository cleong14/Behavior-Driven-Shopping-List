var chai = require('chai');

var expect = chai.expect;
var should = chai.should();

describe('ShoppingList', function () {

  // 'it' refers to what youre describing
  // in this case, it refers to 'ShoppingList'
  it('should be a function', function () {
    expect(ShoppingList).to.be.a('function');
  });
});