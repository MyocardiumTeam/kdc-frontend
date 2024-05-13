import { createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';

export const baseUrl = process.env.NEXT_PUBLIC_BACK_URL;

const baseQuery = fetchBaseQuery({
  baseUrl,
});

const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object,
) => {
  const result = await baseQuery(args, api, extraOptions);
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: 'api',
  endpoints: () => ({}),
});
