 
import styles from './Weather.module.css'; 
import weather1 from '../../icons/weather1.svg'  
import { useEffect, useState } from 'react'; 
import MoreSection from '../more/More';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { searchWeatherAsync, selectWeather } from '../search/searchSlice';
interface IProps {
  type?: string;  
  city?: string;
  weatherData?: any;
} 
const WeatherContainer = (props:IProps) : JSX.Element=> { 
  const type = props.type || '';
  const city = props.weatherData?.payload.name || props.city;
  const dispatch = useAppDispatch();
  const [weather, setWeatherData] = useState(props.weatherData?.payload);
  const [status, setStatus] = useState("")
  const searchSelector = useAppSelector(selectWeather);
  useEffect(()=>{  
    debugger;
    if (city !== undefined && city !== "" && city !== null && weather === undefined && status === "") {
      setStatus("loading")
      const searchPromise = dispatch(searchWeatherAsync(city))
      searchPromise.then((response:any)=>{ 
        setWeatherData(response);
      })
    }
 
  }, [city])

  const convertToCelcius = (temp: number): string => { 
    if (typeof temp === "number"){
      const ctemp = Math.floor((temp - 32) * 5/9);
      return `${ctemp} °C`;
    }
    return '- °C';
    
  }

  const displayWeatherDesc = (desc: any[]): string => { 
    if (desc?.length !== 0 && desc !== undefined){
       return desc[0].description;
    }
    return '';
    
  }
  return (
    <div className={type === "Small" ? styles.weatherContainerSmall : styles.weatherContainer}>
      <div className={type === "Small" ? styles.weatherContainer2Small : styles.weatherContainer2}>
        <div className={styles.twoCol}>
          <div className={styles.col1}>
            <img className = {type === "Small" ? styles.weatherIconSmall : styles.weatherIcon} src={weather1} /> 
        </div> 
        <div className = {styles.col2} >
              <div className = {type === "Small" ? styles.countryTextSmall : styles.countryText} > {city} </div>
              <div className =  {type === "Small" ? styles.temperatureTextSmall : styles.temperatureText}  > {convertToCelcius(weather?.payload.main?.temp)} </div>
              <div className = {type === "Small" ? styles.weatherDescriptionSmall : styles.weatherDescription} >  {displayWeatherDesc(weather?.payload.weather)}  </div>
        </div> 
       
        </div> 
      </div> 
      {
        type !== "Small" && (
          <div className={styles.menuButton}>
              <MoreSection data={city}/>
            </div> 
          
        )
      }
     </div>
  );
}

export default  WeatherContainer;
