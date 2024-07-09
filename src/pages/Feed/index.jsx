import { signOut } from 'firebase/auth';
import React from 'react'
import { toast } from 'react-toastify';
import { auth } from '../../firebase';

const Feed = () => {
  const handleClick = ()=> {
    signOut(auth)
    .then(()=> toast.warning("Oturumunuz kapandı"));
  };
  return (
    <div className='h-screen grid place-items-center'>
      <button onClick={handleClick} className='text-4xl'> Çıkış Yap</button>
    </div>
  )
}

export default Feed;
