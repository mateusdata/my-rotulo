import React from 'react';

const Footer = () => {
    return (

        <footer >
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div style={{display:"flex", flexDirection:"column", gap:"0px", alignItems:"center", justifyContent:"center", textAlign:"center"}}>
                    <a href="#" class="flex items-center mb-4 sm:mb-0">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                        <span class="mr-2 self-center text-2xl font-semibold whitespace-nowrap text-gray-900">Oque é isso no meu rótulo</span>
                    </a>
                   
                </div>
            </div>
        </footer>


    );
}

export default Footer;
