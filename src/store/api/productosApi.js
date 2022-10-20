import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productosApi = createApi({

    reducerPath: 'productos',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com'
    }),

    endpoints: (builder) => ({

        getProductos: builder.query({
            query: () => '/products'
        }),
        getProductosById: builder.query({
            query: (productId) => `/products/${productId}`
        }),
        

    })

})

export const { useGetProductosQuery, useGetProductosByIdQuery } = productosApi;