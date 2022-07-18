import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import  './App.css'; 
import { WeatherContainer } from './features/weather/Weather';
import SearchField from './features/search/SearchField';
function App() {
  return (
    <div>
    <div className="AppBg">
      <div className='BgContainer'>
        <SearchField></SearchField>
        <WeatherContainer></WeatherContainer>
        
       </div>
      
    </div>
    </div>
  );
}

export default App;
