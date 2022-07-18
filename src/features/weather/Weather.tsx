import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
 
import styles from './Weather.module.css';  

import weather1 from '../../icons/weather1.svg'
import { MoreSection } from '../more/More';
export function WeatherContainer() {
   

  return (
    <div className={styles.weatherContainer}>
      <div className={styles.twoCol}>
       <img className = {styles.weatherIcon} src={weather1} /> 
       {/* <MoreSection/> */}
       <div className = {styles.weatherDetails} >
            <div className = {styles.countryText} > Tokyo  </div>
            <div className = {styles.temperatureText} >  29 F  </div>
            <div className = {styles.weatherDescription} > Shower  </div>
       </div>
       <div className = {styles.weatherDetails}   >
             <MoreSection/>
       </div>
        
      </div>
    </div>
  );
}
