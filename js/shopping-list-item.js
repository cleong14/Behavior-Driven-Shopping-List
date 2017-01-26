function ShoppingListItem (name, description) {
  this.name = name;
  this.description = description;
  this.is_done = false;

  this.check = function () {
    this.is_done = true;
    return this.is_done;
  };

  this.uncheck = function () {
    this.is_done = false;
    return this.is_done;
  };

  this.render = function () {
    var shoppingList = document.createElement('ul');

    shoppingList.innerHTML = '<li class="completed_' + this.is_done + '"> \ <span>' + this.name + '</span> \ <span>' + this.description + '</span> \ </li>';

    console.log(shoppingList);
    return shoppingList;
  };
}