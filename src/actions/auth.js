import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLogin = () => {
  console.log("starting login");
  return () => {
    console.log("starting login2");
    return firebase.auth().signInWithPopup(googleAuthProvider);
    console.log("starting login3");
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};