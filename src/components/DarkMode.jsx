import React, { useContext, useEffect, useState } from 'react'
import { MdDarkMode } from 'react-icons/md';
import { Contexto } from '../context/context';


function DarkMode() {
    const {darkMode, setDarkMode} =  useContext(Contexto);

    return (
        <div className=' w-full items-center gap-4 justify-end    md:flex flex '>
            <div className='flex  '>
                <button className='dark:text-black pr-1 ronde flex flex-row flex-nowrap justify-center items-center gap-1' onClick={() => setDarkMode(!darkMode)}>
                    
                    <MdDarkMode className={`${darkMode && "rotate-180"}`} size={26} color={`${!darkMode ? 'black' : '#e8e8e8'}`} />
                </button>
            
            </div>
        </div>
    )
}

export default DarkMode