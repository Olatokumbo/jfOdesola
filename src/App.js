import React from "react";
import Home from "./Sections/Home/Home";
import About from "./Sections/About/About";
import WisdomQuotes from "./Sections/WisdomQuotes/WisdomQuotes";
import LatestBooks from "./Sections/LatestBooks/LatestBooks";
import "./App.css";
const App = () =>{
    return(
        <div>
            <Home/>
            <About/>
            <WisdomQuotes/>
            <LatestBooks/>
        </div>
    )
}

export default App;