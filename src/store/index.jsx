import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../store/slice/cartSlice';
import showCartReducer from './slice/showCartSlice';

export const store = configureStore({
  reducer: {
    showCart: showCartReducer,
    cart: cartReducer,
  },
});
