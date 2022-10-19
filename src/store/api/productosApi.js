import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productosApi = createApi({

    reducerPath: 'productos',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com'
    }),

    endpoints: (builder) => ({
        getProductos: builder.query({
            query: () => '/products'
        })

    })

})

export const { useGetProductosQuery } = productosApi;