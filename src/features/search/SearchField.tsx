import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
 
import styles from './Search.module.css';

export function SearchField() {
   

  return (
    <div>
       <input className = {styles.searchtextbox} type="text" name="name" placeholder='Click here to search'  />
    </div>
  );
}
