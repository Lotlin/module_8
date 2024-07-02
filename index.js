import {Cart} from './Cart.js';
import {FoodGoods} from './FoodGoods.js';
import {ClothingGoods} from './СlothingGoods.js';
import {TechnicsGoods} from './TechnicsGoods.js';

const pizza = new FoodGoods(400, 'pizza', 350, 2, 10);
const shirt = new ClothingGoods('silk', 'shirt', 1500, 1);
const phone = new TechnicsGoods('phone', 'iPhone', 90000, 1, 20);

const myCart = new Cart();

myCart.addGoods(pizza);
myCart.addGoods(shirt);
myCart.addGoods(phone);

myCart.print();
