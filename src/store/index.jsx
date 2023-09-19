import { configureStore } from '@reduxjs/toolkit';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fetchInventory } from './Api';
import categoriesReducer from './categories';
import productsReducer from './productSlice';
import cartReducer from './carts';



const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
  },
  middleware: [thunk], 
});

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




