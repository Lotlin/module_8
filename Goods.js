export const Goods = function(title, price, count, discount = 0) {
  // добавила count
  this.title = title;
  this.price = price;
  this.discount = discount;
  this.count = count;
};
