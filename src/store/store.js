import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productosApi } from "./api/productosApi";




export const store = configureStore({
    reducer: {
        
        [productosApi.reducerPath]: productosApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( productosApi.middleware )
})