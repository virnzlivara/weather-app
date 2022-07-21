import { useEffect, useState } from 'react'; 
import { Hint } from 'react-autocomplete-hint';
import WeatherContainer from '../weather/Weather'; 
import styles from './Search.module.css'; 
import cities from 'cities.json';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {  searchWeatherAsync } from './searchSlice';
import { addCountry, selectWeatherList } from '../weather/weatherSlice';
import { IWeatherResponse } from './model/IWeatherResponse';
interface IProps {
  backgroundHandler: (arg0: any) => void;
}
const SearchField = ({backgroundHandler}: IProps) =>  { 
  const [city, setCity] = useState<any>();
  const [cityFinal, setCityFinal] = useState<any>();
  const [mainWeather, setMainWeather] = useState();
  const [hintData, setHintData] = useState<any>([])
  const dispatch = useAppDispatch();
  const searchWeatherList = useAppSelector(selectWeatherList);
  const [weatherList, setWeatherList] = useState<any>([]);
  const getData =  () => {
    const res = cities;
    const hintArray: any[] | ((prevState: never[]) => never[])  = []
      res?.map((a: { name: any; }) => hintArray.push(a.name))
      setHintData(hintArray)
  }

  useEffect(()=> backgroundHandler(mainWeather), [cityFinal]);

  useEffect(()=> { 
    
    searchWeatherList && setWeatherList(searchWeatherList.weatherList);
    const home = localStorage.getItem("Home");
    if (home === "") {
      setCityFinal(searchWeatherList.weatherList[0])
    } 
  }, [searchWeatherList])

  useEffect(()=> {
    getData()

    const list = localStorage.getItem("City");
    const home = localStorage.getItem("Home");
    const cityList = list && JSON.parse(list!); 
    if (cityList !== undefined && cityList?.length >= 1) { 
      if (cityList?.length === 1){
        setCityFinal(cityList[0]);
      } else {
        // if (weatherList != cityList){
          cityList.map((item: string, index: number) => {
            dispatch(addCountry(item));
            if (home === "" && index === 1) {
              setCityFinal(item); 
            }
            if (home === item) {
              setCityFinal(item); 
            }
          })
         
        // }//
      }
      
     
    }
  }, [])
   
 

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
          {weatherList?.map((item: any, index: number)=>{
          
            if (cityFinal !== item){
              return (<WeatherContainer key= {index} type='Small' city={item}/>)
            }
          })} 
        </div>
        </div>
  );
}

export default SearchField; 