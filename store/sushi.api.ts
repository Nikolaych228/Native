import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Response } from './sushi.api.types'

export const apiSlice = createApi({
    reducerPath: "sushiApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://react-sushi-shop.firebaseio.com/sushi-shop.json"
    }),
    endpoints: builder => ({
        getSushi: builder.query<Array<Response>, any>({
            query: () => ({
                url: "/"
            }),
        }),
    }),
})

export const { useGetSushiQuery } = apiSlice;