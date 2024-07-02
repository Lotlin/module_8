import {Goods} from './Goods.js';

export const ClothingGoods =
  function(fabric, title, price, count, discount = 0) {
    Goods.call(this, title, price, count, discount);
    this.fabric = fabric;
  };

Object.setPrototypeOf(ClothingGoods.prototype, Goods.prototype);
