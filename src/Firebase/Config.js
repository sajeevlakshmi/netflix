import firebase  from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBd9_5jvwk9ONWYBrNgn8G_Y02v0BNVWfQ",
    authDomain: "netflix-clone-49744.firebaseapp.com",
    projectId: "netflix-clone-49744",
    storageBucket: "netflix-clone-49744.appspot.com",
    messagingSenderId: "1038935692727",
    appId: "1:1038935692727:web:2c2e84fa8e3d417dad8432",
    measurementId: "G-YE6YMF03RL"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export { auth};
  export default db;