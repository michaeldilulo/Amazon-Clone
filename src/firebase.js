import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBTpVdHSYFFjofCHBn3U60O626u_HWce7g",
  authDomain: "clone-3d8a8.firebaseapp.com",
  projectId: "clone-3d8a8",
  storageBucket: "clone-3d8a8.appspot.com",
  messagingSenderId: "1063090319242",
  appId: "1:1063090319242:web:8333ae9317762cfec1a273"
})

const auth = firebase.auth()

export {auth}