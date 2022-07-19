import { IWeatherResponse } from './model/IWeatherResponse';
import { WEATHERCONSTANT } from './../../constants/weather';
import { IAction } from "../../model/IAction";
import { IWeatherState } from './model/IWeatherState';

 
export class WeatherReducer {
    private static readonly _initialState: IWeatherState = {
        weather: {
            base: "",
            clouds: {},
            cod: 0,
            coord: {},
            dt: 0,
            id: 0,
            main: {},
            name: "",
            sys: {}, 
            timezone: 0,
            visibility: 0,
            weather: [],
            wind: {},
        }
    }
    public static reducer(state: IWeatherState = WeatherReducer._initialState, action: IAction<IWeatherResponse>): IWeatherState {
        
        if (action.type === WEATHERCONSTANT.GET_WEATHER_FINISHED) { 
            
            return {
                ...state,
                weather: action.payload!,
            } 
        } else {
            return state;
        } 
    }
} 