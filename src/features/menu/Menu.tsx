 
import styles from './Menu.module.css'; 
import home from '../../icons/home.svg';
import deleteBtn from '../../icons/deleteBtn.svg';
import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks'; 
import {addCountry, deleteCountry, selectWeatherList} from '../weather/weatherSlice'
interface IProps {
    handleClose: (bool:boolean) => any
    // openState: boolean;
    city: string;
}
const Menu = (props : IProps) => {
    const componentRef = useRef();
    const {city, handleClose} = props;
    const dispatch = useAppDispatch();
    const searchWeatherList = useAppSelector(selectWeatherList);
    const handleDelete = () => { 
        const list = localStorage.getItem("City"); 
        localStorage.setItem("Home", ''); 
        const cityList = list && JSON.parse(list!); 
        if (cityList !== null && cityList!.length >= 1){ 
            if (cityList.includes(city) === true){
                const updatedCity = cityList.filter((item: string)=>{
                    return (item !== city)
                })
                localStorage.setItem("City", JSON.stringify(updatedCity));
                dispatch(deleteCountry(updatedCity))
            } else {
                console.log("Nothing to delete")
            }
            
        } else{
            console.log("Nothing to delete")
            
        }
        handleClose(true);
    }

    const handeSetToHome = () => {
        const list = localStorage.getItem("City");
        const cityList = list && JSON.parse(list!);
        localStorage.setItem("Home",city);
        if (cityList !== null && cityList!.length >= 1){ 
            if (cityList.includes(city) === false){
                cityList.push(city) 
                localStorage.setItem("City", JSON.stringify(cityList)); 
                dispatch(addCountry(city))
            } else {
                console.log("Already existed!")
            }
            
        } else {
            const item = [city ]
            localStorage.setItem("City",JSON.stringify(item));
        }
        handleClose(true);
        
    }
    return (
        <div ref = {componentRef as any} className={styles.menuContainer}>
            <div className={styles.menuText} onClick={()=> handeSetToHome()}>
                <img src={home} className={styles.imgIcon}></img>Set as home
            </div>
            <div className={styles.menuText}  onClick={()=> handleDelete()}>
                 <img src={deleteBtn} className={styles.imgIcon}></img>Delete
            </div>
        </div>
    )
}

export default Menu;
 
