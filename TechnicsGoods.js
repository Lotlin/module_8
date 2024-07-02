import {Goods} from './Goods.js';

export const TechnicsGoods = function(type, title, price, count, discount = 0) {
  Goods.call(this, title, price, count, discount);
  this.type = type;
};

Object.setPrototypeOf(TechnicsGoods.prototype, Goods.prototype);
