import { apiSlice } from './api';

const RtkAuth = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    authUser: build.mutation<any, AdminLoginRequest>({
      query: (body) => ({
        url: 'api/v1/web_specified/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useAuthUserMutation } = RtkAuth;

interface AdminLoginRequest {
  snils: string;
  userPassword: string;
}
