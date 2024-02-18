import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const carsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://65ccbcf1dd519126b83f6ef8.mockapi.io/",
  }),
  endpoints: (builder) => ({
    getCarsByPage: builder.query({
      query: (page = 1) => `advert/?page=${page}&limit=12`,
    }),
    getAdverts: builder.query({
      query: () => "/advert/",
    }),
  }),
});
export const { useGetCarsByPageQuery, useGetAdvertsQuery } = carsApi;
