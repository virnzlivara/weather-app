
import SearchField from './features/search/SearchField';
import styles from './App.module.css';  
import { useAppSelector } from './app/hooks';
import { selectWeather } from './features/search/searchSlice';
import { useEffect, useState } from 'react';
import { IWeatherResponse } from './features/search/model/IWeatherResponse';
const App = () => {
  const searchWeather = useAppSelector(selectWeather);
  const [bgImage, setBgImage] = useState('')
  const setupBackground = (response: any) => {
    //TODO: Get list of string for the bg
    setBgImage("sunny")
  } 
  return (
    <div>
    <div className={styles.AppBg}>
      <div className={styles.BgContainer} style={{background: `url('/${bgImage}.jpg') center fixed`}}>
        <SearchField backgroundHandler= {setupBackground}></SearchField> 
       </div>
      
    </div>
    </div>
  );
}

export default App;
