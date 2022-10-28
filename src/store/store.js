import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productosApi } from "./api/productosApi";
import { marketSlice } from "./marketSlice";





export const store = configureStore({
    reducer: {
        market: marketSlice.reducer,
        
        [productosApi.reducerPath]: productosApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( productosApi.middleware )
})