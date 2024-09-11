import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    productGet: build.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
  }),
});

export const { useProductGetQuery } = productApi;
