import React, { useEffect } from "react";
import "./App.css";
import Navbar from './components/navbar/navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/index.js';
import About from './Pages/about.js';
import Services from './Pages/services.js';
import SignIn from './Pages/signIn.js';
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
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/signIn' component={SignIn} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;