import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { WeatherAction } from '../../redux/getweather/action';
 
import styles from './Search.module.css'; 
 
const SearchField = ()=>  {
  const [city, setCity] = useState<any>();
  const dispatch = useDispatch();
  useEffect(()=> {
    if (city?.length >= 3) {
      console.log('request', city)
      dispatch(WeatherAction.searchWeather())

    }
  })
  return (
    <div>
       <input
       className = {styles.searchtextbox}
       type="text" name="name"
       placeholder='Click here to search'
    
       onChange={text => setCity(text.target.value)}/>
    </div>
  );
}

export default SearchField; 