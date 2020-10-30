import { firebase } from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAVj_xD9fQwuSdSDKQghXee9kH6aDkePiQ",
  authDomain: "vue-pwa-bjoern.firebaseapp.com",
  databaseURL: "https://vue-pwa-bjoern.firebaseio.com",
  projectId: "vue-pwa-bjoern",
  storageBucket: "vue-pwa-bjoern.appspot.com",
  messagingSenderId: "121387183267",
  appId: "1:121387183267:web:05347239687b95bc902316"
}

firebase.initializeApp(firebaseConfig)

// utils
const auth = firebase.auth()
const firestore = firebase.firestore()

// collection references
const usersCollection = firestore.collection('users');
const todosCollection = firestore.collection('todos');

// export utils/refs
export {
  auth,
  firestore,
  usersCollection,
  todosCollection
}