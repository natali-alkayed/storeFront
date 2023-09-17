const initialState =[];

export const decreaseInventory = (productId) => ({
  type: 'DECREASE_INVENTORY',
  payload: productId,
});

export const increaseInventory = (productId) => ({
  type: 'INCREASE_INVENTORY',
  payload: productId,
});


const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DECREASE_INVENTORY':
      const productToUpdate = state.find((product) => product.id === action.payload);
      if (productToUpdate && productToUpdate.inventoryCount > 0) {
        return state.map((product) =>
          product.id === action.payload
            ? { ...product, inventoryCount: product.inventoryCount - 1 }
            : product
        );
      }
      return state; 

    case 'INCREASE_INVENTORY':
      const productToIncrease = state.find((product) => product.id === action.payload);
      if (productToIncrease) {
        return state.map((product) =>
          product.id === action.payload
            ? { ...product, inventoryCount: product.inventoryCount + 1 }
            : product
        );
      }
      return state;

    default:
      return state;
  }
};

export default productsReducer;