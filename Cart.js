export const Cart = function(goods = []) {
  this.goods = goods;
  this.totalPrice = 0;
  this.count = 0;
};

Cart.prototype.calculateGoodsPrice = function() {
  let totalPrice = 0;

  this.goods.forEach(good => {
    totalPrice +=
     (good.price - (good.price * good.discount / 100)) * good.count;
  });

  this.totalPrice = totalPrice;

  return this.totalPrice;
};

Cart.prototype.addGoods = function(good) {
  this.goods.push(good);
  this.increaseCount();
  // не было предусмотрено заданием, но мне показалось логичным добавить
  // иначе если после addGoods вызвать print, то totalPice будет неверным
  this.calculateGoodsPrice();
};

Cart.prototype.getTotalPrice = function() {
  return this.totalPrice;
};

Cart.prototype.increaseCount = function() {
  return this.count += 1;
};

Cart.prototype.clear = function() {
  this.goods = [];
  this.totalPrice = 0;
  this.count = 0;
};

Cart.prototype.print = function() {
  console.log(`В корзине находятся товары: ${JSON.stringify(this.goods)}`);
  console.log(`Общая стоимость товаров: ${this.totalPrice} рублей.`);
};
