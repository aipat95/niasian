import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import getBaseURL from "../utils/baseURL.js";
import baseURL from "../utils/baseURL.js";

const baseQuery = fetchBaseQuery({
    baseURL: `${getBaseURL()}/reception`,
    credentials: 'include',
    // prepareHeaders: (Headers) => {
    //     const token = localStorage.getItem('token');
    //     if(token) {
    //         Headers.set('Authorization', `Bearer $(token)`);
    //     }
    //     return Headers
    // }
})
const  customerApi = createApi({
    reducerPath: 'customerApi',
    baseQuery, tagTypes: ['Customers'],
    endpoints: (builder) =>({
        fetchAllCustomers: builder.query({
            query: () => '/', //root path
            providesTags: ['Customers']
        }),
        fetchCustomerById: builder.query({
            query: (id) => `/${id}`,
            providesTags: (result, error, id) => [{type: "Customers", id}],
        }),
        addCustomer: builder.mutation({
            query: (newCustomer) => ({
                url: `/checkin`, //route url
                method: "POST",
                body: newCustomer
            }),
            invalidatesTags: ["Customers"]
        }),
        updateCustomer: builder.mutation({
            query: ({id, ...rest}) => ({
                url: `/edit/${id}`,
                method: "PUT",
                body: rest,
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
            invalidatesTags: ["Customers"]
        }),
        deleteCustomer: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Customers"]
        })
    })
})

export const {useFetchAllCustomersQuery, useFetchCustomerByIdQuery,
    useAddCustomerMutation, useUpdateCustomerMutation,
    useDeleteCustomerMutation} = customerApi;
export default customerApi;