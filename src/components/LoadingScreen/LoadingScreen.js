import React from "react";
import style from "./LoadingScreen.module.css";
import profile from "../../assets/main.jpg"
import CircularProgress from '@material-ui/core/CircularProgress';
const LoadingScreen = ()=>{
    return(
        <div className={style.loadingScreen}>
            <img className={style.profile} src={profile} alt="profile"/>
            <CircularProgress/>
        </div>
    )
}

export default LoadingScreen;