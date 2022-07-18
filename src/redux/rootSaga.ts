import { all } from 'redux-saga/effects'; 
import { weatherSaga } from './getweather/saga';
export default function* RootSaga(): any {
   yield all([
      weatherSaga()
   ]); 
} 
