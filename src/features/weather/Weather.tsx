
import { connect, useDispatch } from 'react-redux';
import styles from './Weather.module.css'; 
import weather1 from '../../icons/weather1.svg' 
import { IStore } from '../../model/IStore';
import { IWeatherState } from '../../redux/getweather/model/IWeatherState';
import { useEffect } from 'react';
import { WeatherAction } from '../../redux/getweather/action';
 
interface IProps {
  type?: string; //'small || large'
  city?: string;
}
interface IStateToProps {
  weatherData: IWeatherState
}
 
const mapStateToProps = (state: IStore) => { 
    return {
        weatherData: state.weather
    }
}

type Props = IProps & IStateToProps;
const WeatherContainer = (props:Props) : JSX.Element=> {
  const weather = props.weatherData.weather
  const type = props.type || '';
  const city = props.city || '';
  const dispatch = useDispatch();
  useEffect(()=>{ 
    if (city !== null) {
      dispatch(WeatherAction.searchWeather(city))
    }  
  }, [city])

  const convertToCelcius = (temp: number): string => { 
    if (typeof temp === "number"){
      const ctemp = Math.floor((temp - 32) * 5/9);
      return `${ctemp} °C`;
    }
    return '27 °C';
    
  }

  const displayWeatherDesc = (desc: any[]): string => { 
    if (desc?.length !== 0 && desc !== undefined){
       return desc[0].description;
    }
    return 'Showers';
    
  }
  return (
  <div className={type === "Small" ? styles.weatherContainerSmall : styles.weatherContainer}>
      <div className={type === "Small" ? styles.weatherContainer2Small : styles.weatherContainer2}>
        <div className={styles.twoCol}>
          <div className={styles.col1}>
            <img className = {type === "Small" ? styles.weatherIconSmall : styles.weatherIcon} src={weather1} /> 
        </div> 
        <div className = {styles.col2} >
              <div className = {type === "Small" ? styles.countryTextSmall : styles.countryText} > {weather?.name || 'Tokyo'} </div>
              <div className =  {type === "Small" ? styles.temperatureTextSmall : styles.temperatureText}  > {convertToCelcius(weather.main?.temp)} </div>
              <div className = {type === "Small" ? styles.weatherDescriptionSmall : styles.weatherDescription} >  {displayWeatherDesc(weather.weather)}  </div>
        </div>  
        </div> 
      </div> 
    </div>
  );
}

export default connect(mapStateToProps)(WeatherContainer);
