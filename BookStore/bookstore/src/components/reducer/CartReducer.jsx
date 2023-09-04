const initialState = {
  cart: [],
  wishlist: [],
  user: null,
};

// export const getCartTotal = (cart) =>
//   cart?.reduce((amount, item) => item.price + amount, 0);

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CART_ITEMS": 
      return {
        ...state,
        cart:[...action.payload]
      }
    // case "GET_CART_ITEMS": 
    //   return {
    //     ...state,
    //     cart: [...action.payload]
    //   }
    // case "ADD_TO_CART":
    //   return {
    //     ...state,
    //     cart: [...state.cart, action.item],
    //   };
    // case "UPDATE_CART":
    //   const updateindex = state.cart.findIndex(
    //     (cartItem) => cartItem.id === action.item.id
    //   );
    //   if (updateindex !== -1) {
    //     let newCart = [...state.cart];
    //     const updatedCartItem = { ...newCart[updateindex] };
    //     if (action.increment) {
    //       updatedCartItem.quantity += 1;
    //     } else if (action.decrement) {
    //       if (updatedCartItem.quantity > 1) {
    //         updatedCartItem.quantity -= 1;
    //       } else {
    //         newCart.splice(updateindex, 1);
    //       }
    //     }
    //     newCart[updateindex] = updatedCartItem;
    //     return {
    //       ...state,
    //       cart: newCart,
    //     };
    //   }
    //   return state;
    // case "DELETE_FROM_CART":
    //   let newCart = [...state.cart];
    //   const deleteindex = newCart.findIndex(
    //     (cartItem) => cartItem.id === action.item.id
    //   );
    //   if (deleteindex >= 0) {
    //     newCart.splice(deleteindex, 1);
    //   } else {
    //     console.warn(
    //       `Can't remove the product (id: ${action.id}) as its not in the cart!`
    //     );
    //   }
    //   return {
    //     ...state,
    //     cart: newCart,
    //   };
    // case "SET_USER":
    //   return {
    //     ...state,
    //     user: action.user,
    //   };
    default:
      return state;
  }
};

export default CartReducer;
