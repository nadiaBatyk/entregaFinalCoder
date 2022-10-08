import MongoDBProducts from "./products/MongoDBProducts.js";
import MongoDBCart from "./cart/mongoDBCart.js";
import MongoDBUsers from "./user/mongoDBUser.js";
import MongoDBOrder from "./order/mongoDBOrder.js";

let productDao, cartDao, userDao,orderDao;

productDao = new MongoDBProducts();
cartDao = new MongoDBCart();
userDao = new MongoDBUsers();
orderDao = new MongoDBOrder()

export { productDao, cartDao, userDao,orderDao };
