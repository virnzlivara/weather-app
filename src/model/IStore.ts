import { IWeatherState } from './../redux/getweather/model/IWeatherState';
 
export interface IStore {
    readonly weather: IWeatherState
}