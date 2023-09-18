import { createSlice } from '@reduxjs/toolkit';

const initialState = []; 

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    decreaseInventory: (state, action) => {
      const productToUpdate = state.find((product) => product.id === action.payload);
      if (productToUpdate && productToUpdate.inventoryCount > 0) {
        const updatedState = state.map((product) =>
          product.id === action.payload
            ? { ...product, inventoryCount: product.inventoryCount - 1 }
            : product
        );
        return updatedState;
      }
      return state;
    },
    increaseInventory: (state, action) => {
      const productToIncrease = state.find((product) => product.id === action.payload);
      if (productToIncrease) {
        const updatedState = state.map((product) =>
          product.id === action.payload
            ? { ...product, inventoryCount: product.inventoryCount + 1 }
            : product
        );
        return updatedState;
      }
      return state;
    },
  },
});

export const { decreaseInventory, increaseInventory } = productSlice.actions;
export default productSlice.reducer;

