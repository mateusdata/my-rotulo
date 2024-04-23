import React, { useEffect, useState } from 'react'
import { MdDarkMode } from 'react-icons/md';


function DarkMode() {
    const [darkMode, setDarkMode] = useState(localStorage.theme === 'dark');

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }, [darkMode]);

    return (
        <div className=' w-full items-center gap-4 justify-end    md:flex flex '>
            <div className='flex  '>
                <button className='dark:text-black pr-1 ronde flex flex-row flex-nowrap justify-center items-center gap-1' onClick={() => setDarkMode(!darkMode)}>
                    
                    <MdDarkMode size={26} color={`${!darkMode ? 'black' : '#0a5f9b'}`} />
                </button>
            
            </div>
        </div>
    )
}

export default DarkMode