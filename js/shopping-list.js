function ShoppingList (items) {
  this.items = items;

  this.initItems = function () {
    this.items = [];
    return this.items;
  };

  this.addItem = function (ShoppingListItem) {
    this.items.push(ShoppingListItem);
    console.log(this.item);
  };

  // var header = document.createElement('h1');
  // header.innerHTML = title;

  // document.body.appendChild(header);

  // this.setHeader = function (newHeader) {
  //   header.innerHTML = newHeader;
  // };
}