import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBBQ-YWOXt13XvmlGiXxD8MdROvK-uEN5M",
  authDomain: "post-it-7736d.firebaseapp.com",
  databaseURL: "https://post-it-7736d.firebaseio.com",
  projectId: "post-it-7736d",
  storageBucket: "post-it-7736d.appspot.com",
  messagingSenderId: "522856232137",
  appId: "1:522856232137:web:655fd46d4fa3c986e04918",
  measurementId: "G-ZQSGGN85EH"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); //db access
  const auth = firebase.auth(); //zorgt dat we kunnen inloggen etc
  const provider = new firebase.auth.GoogleAuthProvider();
  const provider2 = new firebase.auth.FacebookAuthProvider();

  export {auth, provider, provider2}
  export default db;