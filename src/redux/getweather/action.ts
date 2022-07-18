import { IAction } from '../../model/IAction';
import { ActionUtility } from '../../utils/ActionUtility';
import { WEATHERCONSTANT } from './../../constants/weather';
 
export class WeatherAction {
    public static searchWeather(payload?: any) : IAction<any> {
        debugger;
        return ActionUtility.createAction(WEATHERCONSTANT.GET_WEATHER, payload);
    } 
}