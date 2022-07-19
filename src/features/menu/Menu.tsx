 
import styles from './Menu.module.css'; 
import home from '../../icons/home.svg';
import deleteBtn from '../../icons/deleteBtn.svg';
// import { useEffect, useRef } from 'react';

interface IProps {
    // openProp: (bool:boolean) => any
    // openState: boolean;
    city: string;
}
const Menu = ({city} : IProps) => {
    // const componentRef = useRef();
    // const {openState, openProp} = props;
    // useEffect(() => {
    //     document.addEventListener("click", handleClick);
    //     return () => document.removeEventListener("click", handleClick);
    //     function handleClick(e: any) {
    //         debugger;
    //         if(componentRef && componentRef.current){
    //             const ref: any = componentRef.current
    //             if(ref.contains(e.target)){
    //                 debugger;
    //                 props.openProp(!openState);
    //             }
    //         }
    //     }
    // }, []);

    const handleDelete = () => {
        const list = localStorage.getItem("City");
        const cityList = list && JSON.parse(list!);
        
        if (cityList !== null && cityList!.length >= 1){ 
            if (cityList.includes(city) === true){
                const updatedCity = cityList.filter((item: string)=>{
                    return (item !== city)
                })
                localStorage.setItem("City", JSON.stringify(updatedCity));
            } else {
                console.log("Nothing to delete")
            }
            
        } else{
            console.log("Nothing to delete")
            
        }
    }

    const handeSetToHome = () => {
        const list = localStorage.getItem("City");
        const cityList = list && JSON.parse(list!);
        
        if (cityList !== null && cityList!.length >= 1){ 
            if (cityList.includes(city) === false){
                cityList.push(city)
                // const item = [city]
                localStorage.setItem("City", JSON.stringify(cityList));
            } else {
                console.log("Already existed!")
            }
            
        } else {
            const item = [city ]
            localStorage.setItem("City",JSON.stringify(item));
        }
        
    }
    return (
        <div className={styles.menuContainer}>
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
 
