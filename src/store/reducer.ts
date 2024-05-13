import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IState {
  mok: string;
}
const initialState: IState = {
  mok: typeof localStorage !== 'undefined' ? localStorage.getItem('accessToken') || '' : '',
};
export type ISetAccessToken = {
  mok: string;
};

export const mokeSlice = createSlice({
  name: 'moke',
  initialState,
  reducers: {},
});

export default mokeSlice.reducer;
export const { reducer, actions } = mokeSlice;
export const isAuthorized = (user: any) => typeof user !== 'undefined';
