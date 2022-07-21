
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import searchReducer from '../features/search/searchSlice';
import weatherListReducer from '../features/weather/weatherSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
    weatherList: weatherListReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
