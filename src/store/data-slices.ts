import { apiSlice } from './api';
const dataSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getPatients: build.query<any, GetPatientsParamsType | undefined>({
      query: (body) => ({
        url: '/api/v1/web_specified/my_patients',
        params: { body },
      }),
    }),
    getPolls: build.mutation<any, GetPollsBodyType>({
      query: (body) => ({
        method: 'POST',
        url: `/api/v1/report/user/${body.userId}/all`,
      }),
    }),
  }),
});

export const { useLazyGetPatientsQuery, useGetPollsMutation } = dataSlice;

type GetPatientsParamsType = {
  limit?: string;
  offset?: string;
  order_direction?: string;
};

type GetPollsBodyType = {
  userId: string;
};
