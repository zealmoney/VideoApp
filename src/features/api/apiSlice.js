import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://videoapp-backend-blond.vercel.app/api'}),

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
        }),
        getPopularMovies: builder.query({
            query: () => '/popularmovies'
        }),
        getVideos: builder.query({
            query: () => '/videos'
        })
    })
})

export const {
    useAddRegisterMutation, 
    useGetRegisteredUsersQuery,
    useGetPopularMoviesQuery,
    useGetVideosQuery
} = apiSlice