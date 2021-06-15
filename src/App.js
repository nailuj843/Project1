import NavBar from './Components/NavBar';
import Home from './Components/Home';
import List from './Components/List';
import Search from './Components/Search';
import Category from './Components/Category';
import IndividualCard from './Components/IndividualCard';
import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useEffect} from 'react'
import AppContext from './Context/AppContext';



function loadingMessage(data){
  
  if(!data){
    return (
      <div> Data is Being Pulled from the server</div>
    )
  }else{
    return(
      <div> Data was successfully loaded</div>
    )
  }

  

}

function App() {
  
  const [data, setData] = useState(null);
  const [toggleView, setToggleView] = useState(false)
  
  
  const [category, setCategory] = useState(null);
  const [card, setCard] = useState(null)

  
  
  useEffect ( ()  => {
    
    fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
      "method": "GET",
      "headers": {
      "x-rapidapi-key": "d9b9a00b2emsh012e8fec7af0114p119992jsn40330856ea89",
      "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com"
    }
    })
    .then(response => response.json())
   // .then(JSON => console.log(JSON))
    .then(result => setData(result))
  }, [])
  
  
  
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <AppContext.Provider value={{data, setData, category,setCategory ,card ,setCard ,toggleView, setToggleView}}>
          
          <NavBar></NavBar>

          {loadingMessage(data)}
          <Switch>
              <Route path = "/" exact> <Home/> </Route>
              
              <Route path = "/List" exact><List></List></Route>
              <Route path = "/Search" exact><Search/></Route>
              <Route path = "/IndividualCard" exact><IndividualCard/></Route>
              <Route path = "/Category" exact> <Category/> </Route>
          </Switch>

          </AppContext.Provider>
        </Router>
      </header>
    </div>
  );
}

export default App;
