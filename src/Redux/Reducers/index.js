import { combineReducers } from "redux";
import { product } from "../../Containers/Product/Product.reducers";
import { products } from "../../Containers/Products/Products.reducers";
import { categories } from "../../Containers/Categories/Categories.reducers";

const reducers = combineReducers({
  product: product,
  products: products,
  categories: categories,
});

export default reducers;
