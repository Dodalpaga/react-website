import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
} from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { createUser, updateUser } from './db';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const navigate = useNavigate();
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('error');
  const [alertMessage, setAlertMessage] = useState('');

  const formatUser = () => {
    return {
      uid: auth.currentUser.uid,
      email: auth.currentUser.email,
      name: auth.currentUser.displayName,
      provider: auth.currentUser.providerData[0].providerId,
      photoUrl: auth.currentUser.photoURL,
      country: '',
      birth: '',
      bio: '',
    };
  };

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false);
  };

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signUp(email, password, fullName, birth, country) {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(email)) {
      setAlertSeverity('error');
      setAlertMessage('Email not valid');
      setAlertOpen(true);
      navigate('/');
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async () => {
          const user = formatUser();
          createUser(auth.currentUser.uid, user);
          try {
            await createUser(auth.currentUser.uid, user);
            await updateUser(auth.currentUser.uid, {
              name: fullName,
              birth: birth,
              country: country,
            });
          } catch (e) {
            console.error('Error adding document: ', e);
          }
          // send verification mail.
          sendEmailVerification(auth.currentUser);
          logOut();
          setAlertSeverity('success');
          setAlertMessage('Please confirm you email...');
          setAlertOpen(true);
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            setAlertSeverity('error');
            setAlertMessage('The email address is already in use.');
            setAlertOpen(true);
          } else {
            setAlertSeverity('error');
            setAlertMessage(error.message);
            setAlertOpen(true);
          }
        });
    }
  }

  function logOut() {
    return signOut(auth);
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider)
      .then(async () => {
        // Extract user information from Google credential
        const userData = {
          uid: auth.currentUser.uid,
          email: auth.currentUser.email,
          name: auth.currentUser.displayName,
          // You can extract more information like user photoURL, etc., if needed
        };

        console.log('Google data processed : ', userData);

        // Update userData or perform any necessary actions with the retrieved user data
        // For example:
        createUser(userData.uid, userData);
        updateUser(userData.uid, {
          name: userData.name,
          email: userData.email,
          uid: userData.uid,
          country: '',
          birth: '',
          bio: '',
          photoUrl: auth.currentUser.photoURL,
        });

        // send verification mail.
        sendEmailVerification(auth.currentUser);
        // Continue with any other necessary actions
      })
      .catch((error) => {
        // Handle errors
        console.error('Error signing in with Google:', error);
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log('Is there a login : ', currentUser);
      if (currentUser) {
        try {
          // Reload user data to get the latest email verification status
          await auth.currentUser.reload();
        } catch (error) {
          console.error('Error reloading user data:', error);
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <userAuthContext.Provider value={{ logIn, signUp, logOut, googleSignIn }}>
        {children}
      </userAuthContext.Provider>
      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        onClose={handleAlertClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleAlertClose}
          severity={alertSeverity}
        >
          {alertMessage}
        </MuiAlert>
      </Snackbar>
    </>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
