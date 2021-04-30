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
  );
}

export default App;