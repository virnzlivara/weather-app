import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
 
import styles from './More.module.css';  

import dots from '../../icons/dots.svg'
export function MoreSection() {
   

  return (
    <div className={styles.moreIcon}>
       <img  src={dots} /> 
    </div>
  );
}
