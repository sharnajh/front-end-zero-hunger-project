import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;