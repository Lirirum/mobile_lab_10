

const initialState = {
    items: [
      { id: 1, name: 'Bitcoin', price: 50000 ,count:1},
      { id: 2, name: 'Ethereum', price: 3500 ,count:1},
      { id: 3, name: 'Ripple', price: 1,count:1 },
      { id: 4, name: 'Litecoin', price: 150,count:1 },
      { id: 5, name: 'Cardano', price: 2, count:1},
      { id: 6, name: 'Polkadot', price: 40,count :1},
      { id: 7, name: 'Chainlink', price: 30, count:1},
      { id: 8, name: 'Stellar', price: 0.5 ,count:1},
    ],
    cart: [],
  };
  
  const cartReducer = (state = initialState, action) => {


    switch (action.type) {
      case 'ADD_TO_CART':
        

        return {
          ...state,
          cart: [...state.cart, action.payload],

        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;