import { Typography } from "@material-ui/core";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import style from "./Home.module.css";
const Home = () =>{
    return(
        <div>
            <Navbar/>
            <div className={style.left}>
                <Typography className={style.name}>Pastor Johnson Funso Odesola</Typography>
            </div>
            <div className={style.right}></div>
        </div>
    )
}

export default Home;