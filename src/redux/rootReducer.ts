 
import { combineReducers } from 'redux'   
import { WeatherReducer } from './getweather/reducer'

const RootReducer = combineReducers({  
    weather: WeatherReducer.reducer
})

export default RootReducer
 