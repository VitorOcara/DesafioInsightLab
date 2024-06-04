import { configureStore } from "@reduxjs/toolkit";
import fornecedoresSlice from "./fornecedoresSlice";

const store = configureStore({
  reducer: {
    fornecedores: fornecedoresSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
