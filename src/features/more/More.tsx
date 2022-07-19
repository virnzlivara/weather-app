import React, { useState } from 'react'; 
 
import styles from './More.module.css';  

import dots from '../../icons/dots.svg'
import Menu from '../menu/Menu';
import { IWeatherResponse } from '../search/model/IWeatherResponse';

interface IProps {
  data: string
}
const MoreSection = ({data}: IProps) =>{
   const [open, setOpen] = useState(false); 
  return (
    <div>
      {/* {!open && ( */}
        <div className={styles.moreContainer}  onClick = {()=> setOpen(!open)}>
        <div className={styles.moreIcon}>
          <img src={dots}/> 
        </div>
      </div>
      {/* )
      } */}
      {
        open && <Menu city={data}/>
      }
      </div>
  );
}

export default MoreSection;
