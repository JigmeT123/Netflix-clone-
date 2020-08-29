import React, { useEffect, useState } from 'react'
import styles from './navbar.module.css';
const NavBar = () => {
    const [handleShow, setHandleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 200){
                setHandleShow(true)
            }else{
                setHandleShow(false)
            }
        })
        return () => {
            window.removeEventListener('scroll');
        };
       
        
    }, [])
    return (
        <div className={`${styles.navbar} ${handleShow && styles.navbar__black}`}>
            <img className={styles.navBar__logo} src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix logo" />
            <img className={styles.navbar__avatar} src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png' alt="user avatar" />
        </div>
    )
}

export default NavBar
