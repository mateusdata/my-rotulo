import React from 'react'
import "./loading.css";
import PulseLoader from "react-spinners/PulseLoader";
const Loading = () => {
  return (
    <div className='loading'>
        <PulseLoader color="orange" size={10} />
    </div>
  )
}

export default Loading