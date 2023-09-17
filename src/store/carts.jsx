const initialState = {
    cartItems: [],
  };
  
  export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
  });
  
  export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: productId,
  });
 
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
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
  
      case 'REMOVE_FROM_CART':
        const updatedCartItems = state.cartItems.map((item) => {
          if (item.id === action.payload) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
        
              return null;
            }
          } else {
            return item;
          }
        });
  
        return {
          ...state,
          cartItems: updatedCartItems.filter((item) => item !== null),
        };
  
      default:
        return state;
    }
  };
  
  
  export default cartReducer;