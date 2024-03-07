import { doc, setDoc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export function updateUser(uid, data) {
  return updateDoc(doc(db, 'users', uid), data);
}

export function createUser(uid, data) {
  return setDoc(doc(db, 'users', uid), { uid, ...data }, { merge: true });
}

export async function getUser(uid) {
  const userDoc = await getDoc(doc(db, 'users', uid));
  if (userDoc.exists()) {
    return userDoc.data();
  } else {
    return null;
  }
}
