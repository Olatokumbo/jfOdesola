import React from "react";
import Home from "./Sections/Home/Home";
import About from "./Sections/About/About";
import WisdomQuotes from "./Sections/WisdomQuotes/WisdomQuotes";
import LatestBooks from "./Sections/LatestBooks/LatestBooks";
import FaithLift from "./Sections/FaithLift/FaithLift";
import Galleries from "./Sections/Galleries/Galleries";
import "./App.css";
const App = () =>{
    return(
        <div>
            <Home/>
            <About/>
            <WisdomQuotes/>
            <LatestBooks/>
            <FaithLift/>
            <Galleries/>
        </div>
    )
}

export default App;