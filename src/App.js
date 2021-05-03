<<<<<<< Updated upstream
import React, { useEffect } from "react";
import "./App.scss";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "./firebase/firebase.js";


const App = () => {
  useEffect(() => {
    const collectionRef = firestore.collection("products");
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        console.log(collectionsMap);
      })
  })
  return (
    <div className="App">
  
    </div>
=======
import React from 'react';
import 'src/App.css';
import Navbar from 'src/components/navbar/navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'src/Pages/home.js';
import About from 'src/Pages/about.js';
import Services from 'src/Pages/services.js';
import SignIn from 'src/Pages/signIn.js';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/signIn' component={SignIn} />
      </Switch>
    </Router>
>>>>>>> Stashed changes
  );
}

export default App;