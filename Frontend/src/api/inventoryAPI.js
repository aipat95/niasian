import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import getBaseURL from "../utils/baseURL.js";

const baseQuery = fetchBaseQuery({
    baseURL: `${getBaseURL()/*api OF INVENTORY from backend*/}`,
    credentials: 'include',
    prepareHeaders: (Headers) => {
        const token = localStorage.getItem('token');
        if(token) {
            Headers.set('Authorization', `Bearer $(token)`);
        }
        return Headers
    } 
})
const  inventoryAPI = createApi({
    reducerPath: 'inventoryApi',
    baseQuery,
    tagTypes: ['Inventory'],
    endpoints: (builder) =>({
        fetchAllInventory: builder.query({
            query: () => '/', //root path
            providesTags: ['Inventory']
        }),
        fetchBookById: builder.query({
            query: (id) => `/${id}`,
            providesTags: (result, error, id) => [{type: "Books", id}],
        }),
        addBook: builder.mutation({
            query: (newBook) => ({
                url: `/create-book`,
                method: "POST",
                body: newBook
            }),
            invalidatesTags: ["Books"]
        }),
        updateBook: builder.mutation({
            query: ({id, ...rest}) => ({
                url: `/edit/${id}`,
                method: "PUT",
                body: rest,
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
            invalidatesTags: ["Books"]
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Books"]
        })
    })
})

export const {useFetchAllInventoryQuery } = inventoryAPI;
export default inventoryAPI;