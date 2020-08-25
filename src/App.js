import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import ChallengeOne from "./pages/ChallengeOne"; //Vì thằng app.js import cả 2 thằng
import ChallengeTwo from "./pages/ChallengeTwo"; //Vì thằng app.js import cả 2 thằng dạmmm
import './App.css' //Những style dùng chung e phải đặt ở trong này 

class App extends Component {
 
  render(){
    return (
      <BrowserRouter basename={'/do-challenge'} >
    
         <Switch>
           <Route exact path="/1">
             <ChallengeOne />
           </Route>
           <Route  path='/2'>
             <ChallengeTwo />
           </Route>

         </Switch>
       
     </BrowserRouter>
    );
  }
}



export default App;

