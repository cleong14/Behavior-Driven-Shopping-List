var chai = require('chai');

var expect = chai.expect;
var should = chai.should();

// describe(); <--- starting point
describe('ShoppingListItem', function () {
  // it(); <--- starting point

  // ShoppingListItem is a class
  // a class is a 'special function'
  // keyword = function
  it('should be a function', function () {
    expect(ShoppingListItem).to.be.a('function');
  });
});