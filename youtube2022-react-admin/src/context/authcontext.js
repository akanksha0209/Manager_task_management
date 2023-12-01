// import { useState, useEffect, useContext, createContext } from "react";
// import {
//   GoogleAuthProvider,
//   getAuth,
//   signInWithPopup,
//   signInWithRedirect,
//   signOut,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   sendPasswordResetEmail,
// } from "firebase/auth";
// import {
//   getFirestore,
//   query,
//   getDocs,
//   collection,
//   where,
//   addDoc,
// } from "firebase/firestore";



// import { auth, app } from "../firebase";

// const AuthContext = createContext();
// export const db = getFirestore(app);

// export const googleProvider = new GoogleAuthProvider();
// export const signInWithGoogle = async () => {
//   try {
//     const res = await signInWithPopup(auth, googleProvider);
//     const user = res.user;
//     const q = query(collection(db, "users"), where("uid", "==", user.uid));
//     const docs = await getDocs(q);
//     if (docs.docs.length === 0) {
//       await addDoc(collection(db, "users"), {
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: "google",
//         email: user.email,
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     console.error("error code is : ", err.code);
//     if (err.code === "auth/insufficient-permission") {
//       alert("handled this!");
//     } else {
//       alert(err.message);
//       // window.render(<Alertbox message={err.message} />);
//     }
//   }
// };

// export const logInWithEmailAndPassword = async (email, password) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//   } catch (err) {
//     console.error(err);
//     console.error("error code is : ", err.code);
//     if (err.code === "auth/insufficient-permission") {
//       alert("handled this!");
//     } else {
//       alert(err.message);
//       // window.render(<Alertbox message={err.message} />);
//     }
//   }
// };

// export const registerWithEmailAndPassword = async (name, email, password) => {
//   try {
//     const res = await createUserWithEmailAndPassword(auth, email, password);
//     const user = res.user;
//     await addDoc(collection(db, "users"), {
//       uid: user.uid,
//       name,
//       authProvider: "local",
//       email,
//     });
//   } catch (err) {
//     console.error(err);
//     console.error("error code is : ", err.code);
//     if (err.code === "auth/insufficient-permission") {
//       alert("handled this!");
//     } else {
//       alert(err.message);
//       // window.render(<Alertbox message={err.message} />);
//     }
//   }
// };

// export const sendPasswordReset = async (email) => {
//   try {
//     await sendPasswordResetEmail(auth, email);
//     alert("Password reset link sent!");
//   } catch (err) {
//     console.error(err);
//     console.error("error code is : ", err.code);
//     if (err.code === "auth/insufficient-permission") {
//       alert("handled this!");
//     } else {
//       alert(err.message);
//       // window.render(<Alertbox message={err.message} />);
//     }
//   }
// };

// export const logout = () => {
//   signOut(auth)
//     .then(() => {
//       console.log("Logged out");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// export const AuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState({});

//   const googleSignIn = () => {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider);
//   };

//   const logOut = () => {
//     signOut(auth)
//       .then(() => {
//         setUser({});
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, []);
//   return (
//     <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const UserAuth = () => {
//   return useContext(AuthContext);
// };
