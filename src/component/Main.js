import React from "react";
import logo from '../logo.svg';

function Main(){
    return(
        <div className="main">
            <header>
              <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div className="wrap">
              <div className="explorer"></div>
              <div className="component-box"></div>
            </div>
        </div>
    );
};

export default Main;