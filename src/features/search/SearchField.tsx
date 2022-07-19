import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Hint } from 'react-autocomplete-hint';
import { WeatherAction } from '../../redux/getweather/action';
import axios from 'axios'
import styles from './Search.module.css'; 
import cities from 'cities.json';
 
const SearchField = () =>  {
  const [city, setCity] = useState<any>('Tokyo');
  const [hintData, setHintData] = useState<any>([])
  const dispatch = useDispatch();
  useEffect(()=> {
    if (city?.length >= 3) {
      // dispatch(WeatherAction.searchWeather(city))

    }
  }, [city])

  const getData =  () => {
    const res = cities;
    const hintArray: any[] | ((prevState: never[]) => never[])  = []
      res?.map((a: { name: any; }) => hintArray.push(a.name))
      setHintData(hintArray)
  }

  useEffect(()=> {
    getData()
  }, [])
  
  return ( 
        <Hint options={hintData} allowTabFill>
          <input
            className = {styles.searchtextbox}
            type="text" name="name"
            placeholder='Click here to search'
            onChange={text => setCity(text.target.value)}/>
        
        </Hint>  
  );
}

export default SearchField; 