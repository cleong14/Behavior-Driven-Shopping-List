var expect = chai.expect;

describe('ShoppingListItem', function () {
  var item;

  beforeEach(function() {
    item = new ShoppingListItem('Soda', 'Carbonated', false);
  });

  it('it should be a function', function () {
    expect(ShoppingListItem).to.be.a('function');
  });

  it('it should have a property named "name"', function () {
    expect(item).to.have.property('name');
    expect(item.name).to.equal('Soda');
  });

  it('it should have a property named "description"', function() {
    expect(item).to.have.property('description');
    expect(item.description).to.equal('Carbonated');
  });

  it('it should have a property name "is_done"', function () {
    expect(item).to.have.property('is_done');
    expect(item.is_done).to.equal(false);
  });

  it.skip('it should have a constructor method that accepts "name" and "description"', {
    
  });

  it('it should have a method named "check"', function () {
    expect(item.check).to.be.a('function');
  });

  it('invoking "check" will set "is_done" property to true', function () {
    expect(item.check()).to.equal(true);
  });

  it('it should have a method named "uncheck"', function () {
    expect(item.uncheck).to.be.a('function');
  });

  it('invoking "uncheck" should will set "is_done" property to false', function () {
    expect(item.uncheck()).to.equal(false);
  });

  it('it should have a method named "render"', function () {
    expect(item.render).to.be.a('function');
  });

  it('it should return an unordered list and constructs and returns a html formatted string. The string should be wrapped in " "', function () {
    expect(item.render()).to.equal('<ul><li class="completed_' + item.is_done + '"> \ <span>' + item.name + '</span> \ <span>' + item.description + '</span> \ </li></ul>');
  });

  it.skip('it should construct and return a html formatted string. The string will be wrapped in " "', function () {
    expect(item.render()).to.equal('<li class="completed_' + item.is_done + '"> \ <span>' + item.name + '</span> \ <span>' + item.description + '</span> \ </li>');
  });
});