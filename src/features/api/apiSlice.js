import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api/'}),

    endpoints: builder => ({
        addRegister: builder.mutation({
            query: initialPost => ({
                url: 'registers/',
                method: 'POST',
                body: initialPost
            })
        }),
        getRegisteredUsers: builder.query({
            query: () => 'registers'
        })
    })
})

export const {useAddRegisterMutation, useGetRegisteredUsersQuery} = apiSlice