 
 
import WeatherContainer from './features/weather/Weather';
import SearchField from './features/search/SearchField';
import styles from './App.module.css'; 
import { useEffect, useState } from 'react';
const App = () => {
  const [weatherList, setWeatherList] = useState<any>([]);
  useEffect(()=>{ 
    const item = localStorage.getItem("savedWeather") || []
    if (item !== undefined && item.length > 1) {
      setWeatherList(item);
    }
  }, [])
  return (
    <div>
    <div className={styles.AppBg}>
      <div className={styles.BgContainer}>
        <SearchField></SearchField>
        <WeatherContainer city={weatherList[0]}/> 
        <div>
          {weatherList && weatherList.length >=2 && weatherList.map((item: any, index: number)=>{
            if (index !== 1){
              <WeatherContainer type='Small' city={weatherList[index]}/>
            }
          })}
        </div>
       </div>
      
    </div>
    </div>
  );
}

export default App;
