import {Goods} from './Goods.js';

export const FoodGoods = function(calories, title, price, count, discount = 0) {
  Goods.call(this, title, price, count, discount);
  this.calories = calories;
};

Object.setPrototypeOf(FoodGoods.prototype, Goods.prototype);
