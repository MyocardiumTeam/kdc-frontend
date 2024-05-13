import { apiSlice } from './api';

const RtkAuth = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    consultationForm: build.mutation<any, AdminLoginRequest>({
      query: (body) => ({
        url: 'api/v1/web_specified/login',
        method: 'POST',
        body: { body },
      }),
    }),
  }),
});

export const { useConsultationFormMutation } = RtkAuth;

type AdminLoginRequest = {
  snils: string;
  userPassword: string;
};
