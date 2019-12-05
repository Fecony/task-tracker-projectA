import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    /* Firebase APIs */
    this.auth = app.auth;
    this.db = app.firestore();

    /* Google Provider */
    this.googleProvider = new app.auth.GoogleAuthProvider();
  }

  // *** Authorization APIs ***

  signInWithGoogle = () => this.auth().signInWithPopup(this.googleProvider);

  signOut = () => this.auth().signOut();

  // *** Users APIs *** EXAMPLE REQUESTS

  user = uid => this.db.doc(`users/${uid}`);

  users = () => this.db.collection('users');
}

export default Firebase;
