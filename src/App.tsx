 
 
// import WeatherContainer from './features/weather/Weather';
import SearchField from './features/search/SearchField';
import styles from './App.module.css'; 
import { useEffect, useState } from 'react';
const App = () => {
  
  return (
    <div>
    <div className={styles.AppBg}>
      <div className={styles.BgContainer}>
        <SearchField></SearchField> 
       </div>
      
    </div>
    </div>
  );
}

export default App;
