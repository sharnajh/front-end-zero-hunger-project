import React, { useEffect } from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Home from './Pages/home.js';
import About from './Pages/about.js';
import Services from './Pages/services.js';
import Navbar from './components/Navbar.js'


import {
  firestore
} from "./firebase/firebase.js";

const App = () => {
  const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
    const transformedCollection = collectionsSnapshot.docs.map(doc => {
      const {name, price } = doc.data();
      return {
        routeName: encodeURI(name.toLowerCase()),
        id: doc.id,
        name,
        price
      }
    });
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.name.toLowerCase()] = collection;
      return accumulator;
    }, {});
  }
  useEffect(() => {
    const collectionRef = firestore.collection("products");
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        console.log(collectionsMap);
      })
    // console.log();
  })

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
      </Switch>
    </Router>
  );
}

export default App;