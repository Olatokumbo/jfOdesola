import React, { useEffect } from "react";
import Home from "./Sections/Home/Home";
import About from "./Sections/About/About";
import WisdomQuotes from "./Sections/WisdomQuotes/WisdomQuotes";
import LatestBooks from "./Sections/LatestBooks/LatestBooks";
import FaithLift from "./Sections/FaithLift/FaithLift";
import Galleries from "./Sections/Galleries/Galleries";
import SocialMedia from "./Sections/SocialMedia/SocialMedia";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Sections/Footer/Footer";
import { connect } from "react-redux";
import * as actionCreator from "./store/actions/info";
import "./App.css";
const App = ({ fetchInfo, data }) => {
  useEffect(() => {
    fetchInfo();
  }, [fetchInfo]);

  if(data){
    return(
        <div>
            <Home/>
            <About/>
            <WisdomQuotes/>
            <LatestBooks/>
            <FaithLift/>
            <Galleries/>
            <SocialMedia/>
            <Contact/>
            <Footer/>
        </div>
    )
  }
  return (<div>Loading...</div>)
};

const mapStateToProps = (state) => {
  return {
    data: state.info.info,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInfo: () => dispatch(actionCreator.fetchInfo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
