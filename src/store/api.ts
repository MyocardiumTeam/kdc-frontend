import { createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { RootState } from './store';
import { authSlice } from './auth';

export const baseUrl = process.env.NEXT_PUBLIC_BACK_URL;
const { setCredentials } = authSlice.actions;

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    console.log('tokenRequest', token);

    if (token) {
      headers.set('token', token);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object,
) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result) {
    const resultAny = result as any;
    const token = resultAny.data?.token;
    if (typeof token === 'string') {
      api.dispatch(setCredentials(token));
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: 'api',
  endpoints: () => ({}),
});
