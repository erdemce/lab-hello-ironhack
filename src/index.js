import React from "react"

import ReactDOM from "react-dom"

import "./style.css"



class App extends React.Component{

    render(){
       return  (
       <React.Fragment>
       <div className="top">

       <div className="top-images">
       <img src="images/ironhack-logo.svg" alt="logo"></img>
       <img src="images/menu-top.svg"></img>

       </div>
       <div>
       <h1>Say hello to<br></br> ReactJS</h1>
       <h4>You will learn how to use  <br></br>the most popular frontend library<br></br>and become a super Ninja developer.</h4>
       </div>
       <button>Awesome!</button>
       </div>

       <div className="bottom">
      
       
       <div class="card">   
        <img src="images/icon1.png"></img>
       <h2>Declarative</h2>
       <h4>React make it painless to create inretactive UIs.</h4>
       </div>

       <div class="card">
       <img src="images/icon2.png"></img>
       <h2>Components</h2>
       <h4>Build encapsulated components that manage thir state.</h4>
       </div>

       <div class="card">
       <img src="images/icon3.png"></img>
       <h2>Single-Way</h2>
       <h4>A set of immutable values are passed to the component's</h4>
       </div>

       <div class="card">
       <img src="images/icon4.png"></img>
       <h2>JSX</h2>
       <h4>Statically-typed, designed to run on modern browsers</h4>
       </div>

       </div>
       </React.Fragment>)
       
       
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));

