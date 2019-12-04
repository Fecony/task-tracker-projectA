import React, { useContext } from 'react';
import { FirebaseContext } from '../../config';

// TEST EXAMPLE OF LOGIN
const LandingPage = () => {
  const firebase = useContext(FirebaseContext); // useContext or use Context.Consumer
  return (
    <div>
      <h1>Landing</h1>
      <SignUpForm firebase={firebase} />
    </div>
  );
};

const SignUpForm = ({ firebase }) => {
  const onSubmit = event => {
    firebase
      .signInWithGoogle()
      .then(authUser => {
        console.log('login', authUser);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  const onSignout = () => {
    firebase.signOut();
  };

  return (
    <>
      <button onClick={onSubmit}>Sign In</button>
      <button onClick={onSignout}>Sign Out</button>
    </>
  );
};

export default LandingPage;
