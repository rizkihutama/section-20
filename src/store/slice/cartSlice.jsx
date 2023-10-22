import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
          subtotal: newItem.price * 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.subtotal = existingItem.quantity * existingItem.price;
      }

      state.totalPrice = state.items.reduce(
        (sum, obj) => sum + obj.subtotal,
        0
      );
      state.totalQuantity = state.items.reduce(
        (sum, obj) => sum + obj.quantity,
        0
      );
    },
    subtractItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        existingItem.quantity--;
        existingItem.subtotal -= newItem.price;
      }

      state.totalPrice = parseFloat(
        state.items.reduce((sum, obj) => sum + obj.subtotal, 0).toFixed(2)
      );
      state.totalQuantity = state.items.reduce(
        (sum, obj) => sum + obj.quantity,
        0
      );
    },
  },
});

export const { addItem, subtractItem } = cartSlice.actions;

export default cartSlice.reducer;
