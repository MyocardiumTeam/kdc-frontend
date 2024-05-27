import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import { apiSlice } from './api';
import { authSlice } from './auth';

export const listenerMiddleware = createListenerMiddleware();

export const setupStore = () => {
  return configureStore({
    reducer: { auth: authSlice.reducer, api: apiSlice.reducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      })
        .prepend(listenerMiddleware.middleware)
        .concat(apiSlice.middleware),
  });
};
export const store = setupStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
