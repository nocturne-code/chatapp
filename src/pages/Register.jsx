import React from 'react'
import image from '../images/image.png'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {auth,db,storage} from '../firebase'
import { useState } from 'react'
import {doc,setDoc}from 'firebase/firestore'
import { ref,uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const [err,setErr] = useState(false)
  const navigate = useNavigate()



  const handleSubmit=async(e)=>{
    e.preventDefault()
    const displayName = e.target[0].value;
    const email= e.target[1].value;
    const password = e.target[2].value;
    const img= e.target[3].files[0];

    
    try{
      const res = await createUserWithEmailAndPassword(auth,email,password)
      const storageRef = await ref(storage,displayName)

      const uploadTask = uploadBytesResumable(storageRef,img).then(()=>{
        getDownloadURL(storageRef).then(async(downloadURL)=>{
          await updateProfile(res.user,{
            displayName,
            photoURL:downloadURL
            });
            await setDoc(doc(db,"users", res.user.uid),{
            uid:res.user.uid,
            displayName,
            email,
            photoURL:downloadURL
            });
            await setDoc(doc(db,"userChats", res.user.uid),{});
            navigate("/")
          
        })
      })
            
    }
    catch(err){
      setErr(true);
    }

  }
  return (
    <div className='formcont'>
      <div className='wrapper'>
        <h3 className='title'>Register</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Username'/>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <input style={{display:"none"}}type="file" id='file'/>
            <label htmlFor="file">
                <img src={image} alt="" />
                <span>Add profile picture</span>
            </label>
            <button>Register</button>
            {err && <span>Something went wrong</span>}
        </form>
        <p>Already have an account? <Link to="/login">Login.</Link></p>
      </div>

    </div>
  )
}

export default Register
