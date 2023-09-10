
const initialState = {
    categories: [
      {
        id: 1,
        name: 'Electronics',
        displayName: 'Electronics',
        description: 'Description for Electronics',
        productIds: [6,7,8,9,10],
      },
      {
        id: 2,
        name: 'Games',
        displayName: 'Games',
        description: 'Description for Games',
        productIds: [1,2,3,4,5], 
      },
    ],
    activeCategory: null, 
    dummyText: '',
  
  };
  
  const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ACTIVE_CATEGORY':
        return {
          ...state,
          activeCategory: action.payload.name,
          dummyText: 'Category Description Goes Here'
          
        };

      default:
        return state;
    }
  };
  
  export default categoriesReducer;