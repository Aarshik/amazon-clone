import React, { useEffect } from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import Login from './Login.js';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import{ auth } from './firebase'
import { useStateValue } from './StateProvider';
function App(){
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
   //will only run once when the app component loads
   auth.onAuthStateChanged(authUser => {
     console.log('The user is ',authUser);
     if(authUser){
       //user just logged in (or) user was logged in
       dispatch({
        type:"SET_USER",
        user:authUser 
       })
     }
     else{
       //user has logged out
       dispatch({
        type:"SET_USER",
        user: null
       })
     }

   })
  }, [])
 
    return (
      <Router>
      <div className="app">
   
        <Switch>
        <Route path='/login'>
          <Login />
        </Route>
          <Route path="/checkout">
          <Header />
            <Checkout />
          </Route>
          <Route path='/'>
          <Header />
          <Home/>
          </Route>
        </Switch>
      </div>
      </Router>
    );
  }


export default App;
