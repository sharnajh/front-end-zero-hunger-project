import firebase from "firebase/app";
import "firebase/firestore";

// Copy and paste these scripts into the bottom of your <body> tag, but before you use any Firebase services:


// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyDW-vAIQ8wiG41XjweQ79G-nrbq-uuGl6M",
//     authDomain: "bmcc-make-a-thon-spring-2021.firebaseapp.com",
//     projectId: "bmcc-make-a-thon-spring-2021",
//     storageBucket: "bmcc-make-a-thon-spring-2021.appspot.com",
//     messagingSenderId: "735842228109",
//     appId: "1:735842228109:web:e7073e39325a12b6848fc4"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>

const config = {
    apiKey: "AIzaSyDW-vAIQ8wiG41XjweQ79G-nrbq-uuGl6M",
    authDomain: "bmcc-make-a-thon-spring-2021.firebaseapp.com",
    databaseURL: "bmcc-make-a-thon-spring-2021.firebaseapp.com",
    projectId: "bmcc-make-a-thon-spring-2021",
    storageBucket: "",
    messagingSenderId: "735842228109",
    appId: "1:735842228109:web:e7073e39325a12b6848fc4"
};

export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
    const transformedCollection = collectionsSnapshot.docs.map(doc => {
        const { name, price } = doc.data();
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

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export default firebase;