var expect = chai.expect;

describe('ShoppingList', function () {
  var list;

  beforeEach(function() {
    list = new ShoppingList();
  });

  it('it should be a function', function () {
    expect(ShoppingList).to.be.a('function');
  });

  it('it should have a property named "items"', function () {
    expect(list).to.have.property('items');
  });

  it('it should have a method that initilizes an empty array', function () {
    expect(list.initItems).to.be.a('function');
    expect(list.initItems()).to.deep.equal([]);
  });

  it('it should have a method "addItem" that accepts a single ShoppingListItem argument', function() {
    expect(list.addItem).to.be.a('function');
  });

  it('invoking addItem by passing in ShoppingListItem object should add object to the items array', function () {
    expect(list.addItem()).to.deep.equal([ShoppingListItem]);
  });
});