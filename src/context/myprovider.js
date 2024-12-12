import React from 'react'
import MyContext from './mycontext'
import { auth , createUserWithEmailAndPassword , updateProfile , sendPasswordResetEmail , db , collection , addDoc } from '../init-firebase'


function Myprovider( {children} ) {

    const SignupFire = (name,email,password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log("SIGN-UP USER >>>",user);
          updateProfile(auth.currentUser, {
            displayName: name
          })

        //   Firestore Ka Function Start
           
        try {
            const docRef = addDoc(collection(db, "users"), {
              Username : name,
              Useremail : email,
              Userpassword : password
            });
            console.log("Document written with ID: (MyText) ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error Message > > > ",errorMessage);
        });
    }

    const ForgotPass = (email) =>{
        sendPasswordResetEmail(auth, email)
        .then(() => {
            console.log("Send Email Successfully !",email)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("ErrorMessage : > > >", errorMessage)
        });
    }

  return (
    <MyContext.Provider value={{ SignupFire , ForgotPass}}>
        {children}
    </MyContext.Provider>
  )
}

export default Myprovider;
