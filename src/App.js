import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
// import Book from './components/Book/Book';
import Header from './components/Header/Header';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CreateAccount from './components/CreateAccount/CreateAccount';
import News from './components/News/News';
import Destination from './components/Destination/Destination';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
          <Header/>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/destination">
              <Destination />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/createAccount">
              <CreateAccount />
            </Route>
            {/* <PrivateRoute path="/book/:bedType">
              <Book />
            </PrivateRoute> */}
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
