import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { mokeSlice } from './reducer';
import { apiSlice } from './api';

export const listenerMiddleware = createListenerMiddleware();

export const setupStore = () => {
  return configureStore({
    reducer: { moke: mokeSlice.reducer, api: apiSlice.reducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      })
        .prepend(listenerMiddleware.middleware)
        .concat(apiSlice.middleware),
  });
};
export const store = setupStore();

// export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
// export type AppDispatch = AppStore['dispatch'];
export const wrapper = createWrapper<AppStore>(setupStore, { debug: true });
