
const initialState = {
    cartItems: [],
  };
  
  // Action Types
  const ADD_TO_CART = 'ADD_TO_CART';
  const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
  
  // Action Creators
  export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
  });
  
  export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId,
  });
  
  // store/cart.js
  
  // ...
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
  
        if (existingItem) {
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
          };
        }
  
      case REMOVE_FROM_CART:
        const updatedCartItems = state.cartItems.map((item) => {
          if (item.id === action.payload) {
            if (item.quantity > 1) {
              // Decrease quantity by one until it reaches one
              return { ...item, quantity: item.quantity - 1 };
            } else {
              // Remove the item from the cart if quantity is one
              return null;
            }
          } else {
            return item;
          }
        });
  
        // Filter out null values (removed items)
        return {
          ...state,
          cartItems: updatedCartItems.filter((item) => item !== null),
        };
  
      default:
        return state;
    }
  };
  
  
  export default cartReducer;