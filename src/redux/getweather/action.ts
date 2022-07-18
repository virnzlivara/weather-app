import { IAction } from '../../model/IAction';
import { ActionUtility } from '../../utils/ActionUtility';
import { WEATHERCONSTANT } from './../../constants/weather';
 
export class WeatherAction {
    public static searchWeather(payload?: any) : IAction<any> {
        return ActionUtility.createAction(WEATHERCONSTANT.GET_WEATHER, payload);
    } 
}