 import React, {useEffect} from "react"
import './App.css';
import Header from "./Header"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import { useStateValue } from "./StateProvider"
import { auth } from "./firebase"

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          // if present set to the user object
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER', 
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
          <Checkout />
          </Route>
          <Route path="/login">
          <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
