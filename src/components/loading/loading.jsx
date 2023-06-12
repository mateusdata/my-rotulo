import React from 'react'
import "./loading.css";
import { ClipLoader } from 'react-spinners';
const Loading = () => {
  return (
    <div className='loading'>
        <ClipLoader color="#36d7b7"   size={40}/>
    </div>
  )
}

export default Loading