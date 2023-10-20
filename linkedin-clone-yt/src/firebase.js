import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyC_7NmcGISrCllRm5XPI6ZfwU1rPUeXPsw",
    authDomain: "linkedin-clone-yt-84198.firebaseapp.com",
    projectId: "linkedin-clone-yt-84198",
    storageBucket: "linkedin-clone-yt-84198.appspot.com",
    messagingSenderId: "108153892957",
    appId: "1:108153892957:web:3296959999937fb92addb4"
  };


  const firebaseApp=firebase.init(firebaseConfig)

  const db=firebaseApp.firestore()
  const auth=firebase.auth()

  export {db,auth};