
import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import homeReducer from "../features/home/homeSlice";
import productReducer from "../features/product/productSlice";
import orderReducer from "../features/order/orderSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    home: homeReducer,
    product: productReducer,
    order: orderReducer,
  },
});

// ✅ أنواع TypeScript المهمة
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
