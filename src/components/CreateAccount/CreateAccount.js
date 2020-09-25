import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './CreateAccount.css';

function CreateAccount() {
  if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig);
  }
  const [newUser,setNewUser]=useState(false);
  const [user,setUser]=useState({
    isSignedIn: false,
    newUser: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  const [loggedInUser,setLoggedInUser]=useContext(UserContext);
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const provider = new firebase.auth.GoogleAuthProvider();
  var fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleSignIn=()=>{
    firebase.auth().signInWithPopup(provider)
    .then (res=> {
      const {displayName,photoURL,email}=res.user;
      const singedInUser={
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL
      }
      setUser(singedInUser);
      console.log(displayName,email,photoURL);
    })
    .catch(err=>{
      console.log(err);
      console.log(err.message);
    })
  }

  const handleFBLogin=()=>{
    firebase.auth().signInWithPopup(fbProvider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }

  const handleSignOut=()=>{
    firebase.auth().signOut()
    .then(res=>{
      const signOutUser={
        isSignedIn: false,
        name: '',
        photo: '',
        email: '',
        error: '',
        success: false
      }
      setUser(signOutUser)
      console.log(res);
    })
    .catch(err=>{
     
    })
  }

  const handleBlur=(e)=>{
    let isFieldValid=true;
    if(e.target.name==='email'){
      isFieldValid=/\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name==='password'){
      const isPasswordValid=e.target.value.length>6;
      const passwordHasNumber=/\d{1}/.test(e.target.value);
      isFieldValid=isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid){
      const newUserInfo={...user};
      newUserInfo[e.target.name]=e.target.value;
      setUser(newUserInfo);
    }
  }

  const handleSubmit=(e)=>{
    if(newUser && user.email && user.password){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(res=>{
        const newUserInfo={...user};
        newUserInfo.error='';
        newUserInfo.success=true;
        setUser(newUserInfo);
        updateUserName(user.name);
      })
      .catch(error => {
        const newUserInfo={...user};
        newUserInfo.error=error.message;
        newUserInfo.success=false;
        setUser(newUserInfo);
      });
      
    }
    if(!newUser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res=>{
        const newUserInfo={...user};
        newUserInfo.error='';
        newUserInfo.success=true;
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);
        history.replace(from);
        console.log('sign in user info', res.user);
      })
      .catch(function(error) {
        const newUserInfo={...user};
        newUserInfo.error=error.message;
        newUserInfo.success=false;
        setUser(newUserInfo);
      });
    }
    e.preventDefault();
  }

  const updateUserName=name=>{
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
    }).then(function() {
      console.log('user name updated successfully');
    }).catch(function(error) {
      console.log(error);
    });
  }
  
  return ( 
    <div className="loginForm" style={{textAlign: 'center'}}>
      {
        user.isSignedIn && <div>
          {/* <p>Welcome, {user.name}</p>
          <p>Your email: {user.email}</p>
          <img src={user.photo} alt=""/> */}
        </div>
      }

      <h1 className="title">Create an account</h1>
      <input type="checkbox" onClick={()=>setNewUser(!newUser)} name="newUser" id=""/>
      <label htmlFor="newUser">New User Sign Up</label>
      <form onSubmit={handleSubmit}>
        {
          newUser && <input className="text" type="text" name="name" onBlur={handleBlur} placeholder="Your Name"/>
        }
        <br/>
        <input className="text" type="text" placeholder="First Name" required/>
        <br/>
        <input className="text" type="text" placeholder="Last Name" required/>
        <br/>
        <input className="text" type="text" name="email" onBlur={handleBlur} placeholder="Username Or Email" required/>
        <br/>
        <input className="text" type="password" name="password" onBlur={handleBlur} placeholder="Password" required/>
        <br/>
        <input className="text" type="password" placeholder="Confirm Password" required/>
        <br/>
        <button className="logBtn">Create an account</button>
        <br/>
        <p>Already have an account? <a className="linkColor" href="login">Login</a></p>
        <input className="logBtn" type="submit" value={newUser ? 'Sign up' : 'Sign in'}/>
      </form>
      <p>Or</p>
      {
        user.isSignedIn ? <button onClick={handleSignOut}>Sign Out</button> :
        <button className="googleBtn" onClick={handleSignIn}>Continue with Google</button>
      }
      <br/>
      <button className="fbBtn" onClick={handleFBLogin}>Continue with Facebook</button>
      <p style={{color:'red'}}>{user.error}</p>
      {user.success && <p style={{color: 'green'}}>User {newUser ? 'created' : 'Logged In'} successfully</p>}
    </div>
  );
}

export default CreateAccount;