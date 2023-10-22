import { createSlice } from '@reduxjs/toolkit';

export const showCartSlice = createSlice({
  name: 'showCart',
  initialState: { cartVisible: false },
  reducers: {
    toggleShowCart: (state) => {
      state.cartVisible = !state.cartVisible;
    },
  },
});

export const { toggleShowCart } = showCartSlice.actions;
export default showCartSlice.reducer;
