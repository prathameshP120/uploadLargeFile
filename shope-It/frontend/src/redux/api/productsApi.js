import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }), //this define base url for all the end point
  endpoints: (builder) => ({
    getProducts: builder.query({
      // //here getProduct is the endpoint which is nothing but the query operation (query operation is used for fetching the data from the backend)
      query: (params) => ({
        url: "/products",
        params: {
          page: params?.page,
          keyword: params?.keyword,
          category: params?.category,
          "price[gte]": params.min,
          "price[lte]": params.max,
          "ratings[gte]": params?.ratings,
        },
      }),
    }),
    getProductDetails: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery } = productApi;

/*
API Slice Definition: The createApi function is used to define an API slice named productApi.
This slice includes configuration such as reducerPath, baseQuery, and endpoints.

Base Query Configuration: The baseQuery is set to fetchBaseQuery({ baseUrl: "/api/v1" }), 
which means all API requests will start with the base URL /api/v1.

Endpoints Definition: Within the endpoints function, two endpoints are defined:

getProducts: This endpoint fetches a list of products from the /products URL.
getProductDetails: This endpoint fetches the details of a specific product from the /products/${id} URL.
Generated Hooks: The createApi function generates hooks for each endpoint:

useGetProductsQuery: A hook to fetch the list of products.
useGetProductDetailsQuery: A hook to fetch the details of a specific product.
Using the Hooks in Components: These hooks can be used in React components to trigger API requests
and manage the returned data.
 For example, you can use useGetProductsQuery in a component to fetch and display a list of products, 
 or useGetProductDetailsQuery to fetch and display details of a specific product based on its ID.




*/
