import NavBar from './Components/NavBar';
import Home from './Components/Home';
import List from './Components/List';
import Search from './Components/Search';
import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {useEffect} from 'react'
import AppContext from './Context/AppContext';

function doesThisWork(){
  return (
    <div> yes, yes it does </div>
  )
}

function formatList(data){
  
  let keys = Object.keys(data)

  return(
    keys.map(item => <li>  item  </li>)
  )

}

function App() {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [ourElements, setElements] = useState(null);

  useEffect (() => {
    fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
      "method": "GET",
      "headers": {
      "x-rapidapi-key": "d9b9a00b2emsh012e8fec7af0114p119992jsn40330856ea89",
      "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com"
    }
    })
    .then(response => response.json())
    .then(JSON => console.log(JSON))
    .then(result => setData(result))
  })
  
  
  
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <AppContext.Provider>
          {doesThisWork()}
          <NavBar></NavBar>
          <Switch>
              <Route path = "/" exact> <Home/> </Route>
              <Route path = "/List" exact><List></List></Route>
              <Route path = "/Search" exact><Search/></Route>

          </Switch>

          </AppContext.Provider>
        </Router>
      </header>
    </div>
  );
}

export default App;
