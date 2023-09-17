import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import categoriesReducer from './categories';
import productsReducer from './products';
import cartReducer from './carts';


const rootReducer = combineReducers({
  categories: categoriesReducer, 
  products: productsReducer,
  cart: cartReducer, 
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;