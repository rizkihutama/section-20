import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showCart: false,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleShowCart: (state) => {
      state.showCart = !state.showCart;
    },
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        const existingItem = state.items[existingItemIndex];
        const updatedQuantity = existingItem.quantity + 1;
        const updatedSubtotal = updatedQuantity * existingItem.price;

        state.items[existingItemIndex] = {
          ...existingItem,
          quantity: updatedQuantity,
          subtotal: updatedSubtotal,
        };
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          subtotal: newItem.price * 1,
        });
      }
    },
    subtractItem: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );

      const existingItem = state.items[existingItemIndex];
      const updatedQuantity = existingItem.quantity - 1;
      const updatedSubtotal = updatedQuantity * existingItem.price;

      if (updatedQuantity === 0) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.items[existingItemIndex] = {
          ...existingItem,
          quantity: updatedQuantity,
          subtotal: updatedSubtotal,
        };
      }

      // console.log(updatedQuantity);
    },
  },
});

export const { toggleShowCart, addItem, subtractItem } = cartSlice.actions;

export default cartSlice.reducer;
