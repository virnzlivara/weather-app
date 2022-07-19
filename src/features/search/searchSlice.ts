import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { IWeatherState } from './model/IWeatherState';
import { getWeatherForecast } from '../../utils/HttpUtility'; 

 

const initialState: IWeatherState = { 
  data: [],
  status: ''
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const searchWeatherAsync = createAsyncThunk(
  'search/fetchWeather',
  async (city: string) => {
 
    const response = await getWeatherForecast(city);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: { 
    
  },

  extraReducers: (builder) => {
    builder
      .addCase(searchWeatherAsync.pending, (state) => { 
        state.status = 'loading';
      })
      .addCase(searchWeatherAsync.fulfilled, (state, action) => { 
        state.status = 'idle';
        state.data = action.payload;
      })
      .addCase(searchWeatherAsync.rejected, (state) => { 
        state.status = 'failed';
      });
  },
  
});

// export const { increment, decrement, incrementByAmount } = searchSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectWeather= (state: RootState) => state.search
 
export default searchSlice.reducer;
