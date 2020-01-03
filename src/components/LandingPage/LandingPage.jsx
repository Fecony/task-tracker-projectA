import React, { useContext, useState } from 'react';
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
  const [error, setError] = useState(null);

  const onSubmit = e => {
    e.preventDefault();

    firebase
      .signInWithGoogle()
      .then(authUser => {
        console.log('login', authUser);
        let isNewUser = authUser.additionalUserInfo.isNewUser;
        if (isNewUser) {
          // New User, set default user values. Redirect to Settings for update
          return firebase.user(authUser.user.uid).set({
            username: authUser.user.displayName,
            email: authUser.user.email,
            roles: {}
          });
        }
        // User already logged in, don't update users/:id data. Redirect to Home
        setError(null);
      })
      .catch(error => {
        setError(error);
        console.log('error', error);
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <button type='submit'>Sign In With Google</button>
      {error && <p>{error.message}</p>}
      {/* Create Error Component or notify user */}
    </form>
  );
};

export default LandingPage;
