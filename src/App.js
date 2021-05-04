import React, { useEffect } from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Home from './Pages/home.js';
import About from './Pages/about.js';
import Services from './Pages/services.js';
import Navbar from './components/Navbar.js'
import MapComponent from './components/GoogleMaps/MapComponent.js';

import {
  firestore,
  convertMarketLocationsSnapshotToMap
} from "./firebase/firebase.js";

const App = () => {
  const [locations, setLocations] = React.useState(null);
  useEffect(() => {
    const collectionRef = firestore.collection("market-locations");
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertMarketLocationsSnapshotToMap(snapshot);
        setLocations(collectionsMap);
      })
  }, [])

  return (
    <Router>
      <Navbar />
      {locations && <MapComponent coordinates={locations[0]} />}
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
      </Switch>
    </Router>
  );
}

export default App;