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
  const [user, setUser] = useState({});
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('error');
  const [alertMessage, setAlertMessage] = useState('');

  const formatUser = (user) => {
    return {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      provider: user.providerData[0].providerId,
      photoUrl: user.photoURL,
      country: '',
      birth: '',
      phone: '',
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
        .then(async (response) => {
          const user = formatUser(response.user);
          createUser(user.uid, user);
          try {
            await createUser(user.uid, user);
            await updateUser(user.uid, {
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
          setAlertMessage('Please log in again');
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
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log('Auth', currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <userAuthContext.Provider
        value={{ user, logIn, signUp, logOut, googleSignIn }}
      >
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
