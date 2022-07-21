import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { getWeatherForecast } from '../../utils/HttpUtility'; 

interface IWeatherList {
  weatherList: string[];
}

const initialState: IWeatherList = { 
  weatherList: []
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

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: { 
    addCountry: (state, action) =>{
      state.weatherList.push(action.payload);
    },

    deleteCountry: (state, action) =>{ 
      state.weatherList = action.payload;
    }
  },
 
  
});

export const { addCountry, deleteCountry} = weatherSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectWeatherList= (state: RootState) => state.weatherList
 
export default weatherSlice.reducer;
