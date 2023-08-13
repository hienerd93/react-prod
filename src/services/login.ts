import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { LoginResponse } from "./interface";

// Define a service using a base URL and expected endpoints
export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/login" }),
  endpoints: (builder) => ({
    getLoginData: builder.query<LoginResponse, undefined>({ query: () => "" }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetLoginDataQuery } = loginApi;

export default loginApi;
