import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IState {
  token: string;
}
const initialState: IState = {
  token: typeof localStorage !== 'undefined' ? localStorage.getItem('token') || '' : '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state: IState, action: PayloadAction<string>) => {
      localStorage.setItem('token', action.payload);
      state.token = action.payload;
    },
    logout: (state: IState) => {
      localStorage.removeItem('token');
      state.token = '';
    },
  },
});

export default authSlice.reducer;
export const { reducer, actions } = authSlice;
export const isAuthorized = () =>
  !!(typeof localStorage !== 'undefined' && localStorage.getItem('token'));
