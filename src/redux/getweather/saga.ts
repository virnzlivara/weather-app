import { WEATHERCONSTANT } from './../../constants/weather'; 
import { takeEvery } from 'redux-saga/effects';  
import { put } from 'redux-saga/effects';  
import { ActionUtility } from '../../utils/ActionUtility';
import { IPayload } from '../../utils/IPayload';
import { getWeatherForecast } from '../../utils/HttpUtility';

class WeatherSaga {
    public static *searchWeather(payload: IPayload): Iterable<any>{
        const actionType: string = WEATHERCONSTANT.GET_WEATHER;
        // const API_KEY= "e4e930ec2b141d3f95fccc9f633b7ca0";
        // const data = payload.payload;
        const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=35.652832&lon=139.839478&appid=e4e930ec2b141d3f95fccc9f633b7ca0`;
        
        try {
            
            const response : any = yield getWeatherForecast(endpoint);
            yield put(ActionUtility.requestCompleted(actionType, response, false));
        }catch(error){
            yield put(ActionUtility.requestCompleted(actionType, error, true))

        }
    } 
}
export function* weatherSaga(): Iterable<any>{
    yield takeEvery(WEATHERCONSTANT.GET_WEATHER, WeatherSaga.searchWeather);
 } 

