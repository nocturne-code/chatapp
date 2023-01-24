import React from 'react'
import {signOut} from 'firebase/auth'
import { auth } from '../firebase'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navigation = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navigation'>
      <div className='user'>
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
             
      </div>
      <button onClick={()=>signOut(auth)}>Log Out</button>      
    </div>
  )
}

export default Navigation
