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
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('error');
  const [alertMessage, setAlertMessage] = useState('');

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false);
  };

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signUp(email, password, fullName, userName, dateOfBirth, country) {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(email)) {
      setAlertSeverity('error');
      setAlertMessage('Email not valid');
      setAlertOpen(true);
      navigate('/signin');
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (response) => {
          const userid = response.user.uid;
          try {
            await setDoc(doc(db, 'users', userid), {
              fullName: fullName,
              username: userName,
              email: email,
              dateOfBirth: dateOfBirth,
              country: country,
            });
          } catch (e) {
            console.error('Error adding document: ', e);
          }
          // send verification mail.
          sendEmailVerification(auth.currentUser);
          logOut();
          navigate('/signin');
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
