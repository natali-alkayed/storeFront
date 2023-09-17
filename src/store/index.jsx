import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fetchInventory } from './Api';

import categoriesReducer from './categories';
import productsReducer from './products';
import cartReducer from './carts';


const rootReducer = combineReducers({
  categories: categoriesReducer, 
  products: productsReducer,
  cart: cartReducer, 

});


const store = createStore(rootReducer, applyMiddleware(thunk));


export const fetchInventoryAndInitializeProducts = () => {
  return async (dispatch) => {
    try {
      const inventoryData = await fetchInventory();
      dispatch(initializeProducts(inventoryData));
    } catch (error) {
      console.error(error);
    }
  };
};

export default store;


