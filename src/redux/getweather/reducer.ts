import { IWeatherResponse } from './model/IWeatherResponse';
import { WEATHERCONSTANT } from './../../constants/weather';
import { IAction } from "../../model/IAction";
import { IWeatherState } from './model/IWeatherState';

 
 
export class WeatherReducer {
    private static readonly _initialState: IWeatherState = {
        lat: 0,
        lon: 0,
        current: {}
    }
    public static reducer(state: IWeatherState = WeatherReducer._initialState, action: IAction<IWeatherResponse>): IWeatherState {
        switch (action.type) {
            case WEATHERCONSTANT.GET_WEATHER_FINISHED:
    
                return {
                    ...state,
                } 
            default:
                return state;
        }
    }
} 