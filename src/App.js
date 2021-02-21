import './App.css';

import Banner from './Components/Banner';
import React from "react";
import Suggestion from "./Components/Suggestion";
import YouMayLike from "./Components/YouMayLike/YouMayLike";

import joint from "./resources/joints_suggestion.webp";
import mightyMagnesium from "./resources/mighty_magnesium.png";
import preProBiotics from "./resources/pro_pre_biotics.png";

class App extends React.Component {
  render()
  {
    return (
        <div className="container">
          <div className="banner">
            <Banner/>
          </div>
          <div className="suggestions">
              <Suggestion src={joint}
                          paddingRight="10px"
              />
              <Suggestion src={mightyMagnesium}
                          paddingRight="10px"
              />
              <Suggestion src={preProBiotics}/>
          </div>
            <div>
                <YouMayLike />
            </div>
        </div>
    );
  }
}

export default App;
