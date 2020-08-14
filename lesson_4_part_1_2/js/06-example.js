const cart = {
  showItems() {
    console.log("this: ", this);
    console.log("this.items: ", this.items);
  },
};

document
  .querySelector(".js-show-items")
  .addEventListener("click", cart.showItems.bind(cart));
