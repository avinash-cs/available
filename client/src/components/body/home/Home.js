import React from 'react'
import logo from "../logo.svg";
import './home.css'
import Header from '../../header/Header'
function Home() {
    return (
        <div className="main">
        <Header />
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            <span id="main-logo">ServiceFare </span> <br />
            </h1>
            <h3>
            Website is under construction we will be starting our service from 1
            Jan 2022 </h3>
          
        </header>
      </div>
        </div>
    )
}

export default Home
