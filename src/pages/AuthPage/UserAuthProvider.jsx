import {
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { setDoc, doc, addDoc, collection } from "firebase/firestore";
import React, { useContext, useEffect, useState, createContext } from "react";
import { auth, db } from "../../components/firebase";

// import {
//   auth,
//   db,
//   onAuthStateChanged,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/firestore";

// const AuthContext = React.createContext();
// export const UseAuth = () => {
//   return useContext(AuthContext); //return useContext object
// };

// const AuthContext = createContext();
// export const UseAuth = () => {
//   return useContext(AuthContext);
// };

export const AuthContext = React.createContext();

// full app props.children if u pass props
const UserAuthProvider = ({ children }) => {
  const [verifyemail, setverify] = useState();
  const [error, setError] = useState(""); // handle error response
  const [currentUser, setCurrentUser] = useState();
  //store current user
  // const [isLogin, setIsLogin] = useState(false);

  // const [username, setUsername] = useState();

  // execute any change in login and signup
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log(user);
      // console.log(user.email);
      if (user) {
        setCurrentUser(user);
        setverify(user.emailVerified);
        // setIsLogin(true);
        // navigate("/home");
        // console.log(user.uid);
        // console.log(user.username);
        // console.log(verifyemail + "in mail");
        console.log("u are logging");
      } else {
        // setIsLogin(false);
        console.log("no user availble");
        // navigate("/home/signup");
      }
    });
  }, []);
  // currentUser

  // profile information store
  const profileInformation = (profile) => {
    return addDoc(collection(db, "profile"), profile);
  };

  // const profileInformation = (profiles) =>{
  //   return  setDoc(doc(db, "collection 的名稱", "document 的名稱"), 資料, { merge: true });
  // }

  // db.collection('expense')
  // .doc('breakfast001')
  // .set(
  //   {
  //     test: '用 merge 的話不會蓋掉哦'
  //   },
  //   { merge: true }
  // )

  // Login Functinallity
  const UserLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout Functionllity
  const logout = () => {
    setCurrentUser(undefined);
    return signOut(auth);
  };

  // create user
  const SignUp = async (email, password, username) => {
    setError("");
    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        console.log(result.user);
        updateProfile(auth.currentUser, {
          displayName: username,
        })
          .then(() => {
            console.log(username);
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        //current user signup we access that id to make document by this id
        // const ref = doc(db, "usersinformation", result.user.uid);
        // const docRef = await setDoc(ref, { username })
        // setDoc use to provide specific id for document
        // addDoc use to generate Auto-id firebase
        // both id in auth and firestore are different
        try {
          // const ref = doc(db, "userinfo", result.user.uid);
          const ref = doc(db, "users", email);
          const docRef = await setDoc(ref, { username });

          alert("welcome new user create successfully");
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          // await addDoc(collection(db, "usersinformation"), { username })
          //   .then((re) => {
          //     alert("yes the data has been enter"); //after data store successfuly
          //   })
          console.log(e.message);
          console.error("Error adding document: ", e);
        }
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          setInterval(() => {
            setError("");
          }, 5000);
          setError("email already in use try another email");
        }
        //error checking
        // setError("email is already in use try another email");
        else if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
          setInterval(() => {
            setError("");
          }, 5000);
          setError("Password Must be 6 charecter");
        }
        //   setError("Password Must be 6 charecter.");
        else {
          setError(err.message);
        }
      });
  };

  const value = {
    currentUser,
    SignUp,
    error,
    UserLogin,
    logout,
    profileInformation,
    verifyemail,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default UserAuthProvider;
