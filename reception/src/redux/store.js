import { configureStore } from '@reduxjs/toolkit'
import customerApi from "./CustomerAPI.js";

export const store = configureStore({
    reducer: {
        [customerApi.reducerPath]: customerApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(customerApi.middleware),
})
