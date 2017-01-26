var chai = require('chai');

var expect = chai.expect;
var should = chai.should();

// describe(); <--- starting point
describe('ShoppingListItem', function () {
  var item;

  beforeEach();
  // it(); <--- starting point

  // ShoppingListItem is a class
  // a class is a 'special function'
  // keyword = function
  it("should be a function", function () {
    expect(ShoppingListItem).to.be.a("function");
  });

  // ShoppingListItem has property named 'name'
  it("should have a property named 'name'", function () {
    expect(ShoppingListItem).to.have.property("name");
  });

  // ShoppingListItem has a propety name description
  it("should have a property named 'description'", function () {
    expect(ShoppingListItem).to.have.property("description");
  });
});