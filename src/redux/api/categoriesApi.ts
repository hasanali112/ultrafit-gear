import { baseApi } from "./baseApi";

const categoriesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    categoryGet: build.query({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
    }),
  }),
});

export const { useCategoryGetQuery } = categoriesApi;
