import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

/// "createSlice" is a utility function provided by Redux Toolkit, a library built on top of Redux.
/// It simplifies the process of creating Redux slices,
/// which are portions of the Redux state, along with associated action creators and reducers.
const CartSlice = createSlice({
  ///  A string value representing the name of your slice. It's used internally by Redux Toolkit for action type prefixing and other purposes.
  name: "cart",
  /// An object representing the initial state of your slice.
  initialState,
  /// An object containing reducer functions.
  /// Each key-value pair represents a single reducer, where the key is the name of the action and the value is the reducer function.
  reducers: {
    addItemToCart(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart(state) {
      state.cartItems = [];
    },
    increaseItemQuantity(state, action) {
      const itemToIncrease = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
      }
    },
    decreaseItemQuantity(state, action) {
      const itemToDecrease = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
      }
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;
