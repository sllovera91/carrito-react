import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productosApi } from "./api/productosApi";
import { uiSlice } from "./uiSlice";




export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        
        [productosApi.reducerPath]: productosApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( productosApi.middleware )
})