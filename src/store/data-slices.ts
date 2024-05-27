import { apiSlice } from './api';
const dataSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getPatients: build.query<User[], GetPatientsParamsType>({
      query: (body) => ({
        url: '/api/v1/web_specified/my_patients',
        params: { body },
      }),
    }),
    getPolls: build.query<Report, string>({
      query: (body) => ({
        url: `/api/v1/report/user/${body}/all`,
      }),
    }),
    getPollInfo: build.query<Survey, string>({
      query: (body) => ({
        url: `/api/v1/report/operation/${body}`,
      }),
    }),
  }),
});
export const { useLazyGetPatientsQuery, useLazyGetPollsQuery, useLazyGetPollInfoQuery } = dataSlice;

export type GetPatientsParamsType = {
  limit: string;
  offset: string;
  order_direction: string;
};

interface Report {
  report: Bla[];
}

interface Bla {
  survey_name: string;
  operations: Operation[];
}

interface Operation {
  id: number;
  timestamp: string;
}

export interface User {
  firstName: string;
  lastName: string;
  patronymic: string;
  userBirthDate: string;
  userGender: string;
  userId: number;
  userPhone: string;
  userRole: string;
  userSnils: string;
  userTotalScore: string;
}

interface SurveyAnswer {
  question: string;
  number: number;
  answer: string;
}

interface Survey {
  surveyName: string;
  answers: SurveyAnswer[];
  timestamp: string;
}
