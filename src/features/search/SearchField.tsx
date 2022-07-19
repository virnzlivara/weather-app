import { useEffect, useState } from 'react'; 
import { Hint } from 'react-autocomplete-hint';
import WeatherContainer from '../weather/Weather'; 
import styles from './Search.module.css'; 
import cities from 'cities.json';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {  searchWeatherAsync, selectWeather } from './searchSlice';
const SearchField = () =>  {
  const [city, setCity] = useState<any>();
  const [cityFinal, setCityFinal] = useState<any>();
  const [mainWeather, setMainWeather] = useState();
  const [hintData, setHintData] = useState<any>([])
  const dispatch = useAppDispatch();
  const searchStore = useAppSelector(selectWeather);
  const getData =  () => {
    const res = cities;
    const hintArray: any[] | ((prevState: never[]) => never[])  = []
      res?.map((a: { name: any; }) => hintArray.push(a.name))
      setHintData(hintArray)
  }

  useEffect(()=> {
    getData()
  }, [])
  const [weatherList, setWeatherList] = useState<any>([]);
  useEffect(()=>{ 
    const list = localStorage.getItem("City");
    const cityList = list && JSON.parse(list!);
    if (cityList !== undefined && cityList?.length >= 1) {
      setWeatherList(cityList);
      setCityFinal(cityList[0]); 
    }
  }, [searchStore])

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') { 
      setCityFinal(city);
      const searchPromise = dispatch(searchWeatherAsync(city))
      searchPromise.then((response:any)=>{ 
        setMainWeather(response);
      })
    }
  }
  return ( 
    <div>
        <Hint options={hintData} allowTabFill>
          <input
            className = {styles.searchtextbox}
            type="text" name="name"
            placeholder='Click here to search'
            onChange={text => setCity(text.target.value)}
            onKeyDown={e => handleKeyDown(e)}/>
        
        </Hint> 
         
         <WeatherContainer city = {cityFinal} weatherData={mainWeather}/>  
        
        <div>
          {weatherList && weatherList.length >=2 && weatherList.map((item: any, index: number)=>{
          
            if (index !== 0){
              return (<WeatherContainer key= {index} type='Small' city={item}/>)
            }
          })} 
        </div>
        </div>
  );
}

export default SearchField; 