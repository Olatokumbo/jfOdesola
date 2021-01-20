import React from "react";
import Home from "./Sections/Home/Home";
import About from "./Sections/About/About";
import WisdomQuotes from "./Sections/WisdomQuotes/WisdomQuotes";
import LatestBooks from "./Sections/LatestBooks/LatestBooks";
import FaithLift from "./Sections/FaithLift/FaithLift";
import Galleries from "./Sections/Galleries/Galleries";
import SocialMedia from "./Sections/SocialMedia/SocialMedia";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Sections/Footer/Footer";
import "./App.css";
const App = () =>{
    return(
        <div>
            <Home/>
            <About/>
            <WisdomQuotes/>
            {/* <LatestBooks/>
            <FaithLift/>
            <Galleries/>
            <SocialMedia/>
            <Contact/>
            <Footer/> */}
        </div>
    )
}

export default App;