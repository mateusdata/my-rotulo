import React, { useContext, useEffect, useState } from 'react';
import { Contexto } from '../context/context';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserAddOutlined, SearchOutlined, ExceptionOutlined, LogoutOutlined, LoginOutlined, SignatureOutlined } from '@ant-design/icons';
import { MoonIcon } from '@heroicons/react/24/outline';
import DarkMode from '../components/DarkMode';
function GlobalLayout({ children }) {
  const { currentPage, setCurrentPage } = useContext(Contexto)
  const { logout, user, nomeUser, setNomeUser, showMenu, setShowMenu } = useContext(Contexto);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { cpf } = user;
        const response = await axios.get('/seachUser', {
          params: {
            cpf
          }
        });
        setNomeUser(response?.data[0]?.nome);
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
      }
    };
    fetchData();
  }, []);


  return (
    <>
      <body class="bg-gray-10 dark:bg-gray-950 flex min-h-screen w-full">
        <div class=" w-full flex flex-col mx-auto size-full">

          <header class="mb-2 fixed bg-green-500  dark:bg-slate-800 flex flex-wrap sm:justify-start sm:flex-nowrap border-b  dark:border-b-gray-800 border-b-gray-300 z-50 w-full text-sm py-1">
            <nav class="w-full  px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
              <div class="flex items-center justify-between">
                {nomeUser ? <a class="flex-none text-xl font-semibold dark:text-white  focus:ring- hidden sm:block" href="#" aria-label="Brand">
                  <UserAddOutlined color='red' className='text-white' />

                  <span className='text-white'>{` ${nomeUser ? nomeUser : "Administrador"}`}</span>
                </a> :
                  <div className='flex gap-2'>
                    <a class="flex-none text-xl font-semibold text-white dark:text-white  focus:ring- hidden sm:block" href="#" aria-label="Brand"> 
                    O que é isso no meu r <SearchOutlined style={{ fontSize: '30px' }} color='red' className='text-white  rotate-0' />tulo?
                    
                    </a>
                    
                    <p></p>
                  </div>

                }
                <a class="flex-none text-xl font-semibold dark:text-white text-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-600 sm:hidden" href="#" aria-label="Brand">{`${nomeUser ? nomeUser : "Meu rótulo"}`}</a>

                <div class="sm:hidden">

                  <button onClick={() => setShowMenu(!showMenu)} type="button" class=" p-2 inline-flex justify-center items-center gap-2 rounded-lg border border-gray-100 hover:border-gray-200 font-medium text-gray-300 text:black shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-blue-600 transition-all text-sm" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                    <svg class="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                    <svg class="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                  </button>
                </div>
              </div>
              <div id="navbar-collapse-with-animation" class={`hs-collapse ${!showMenu && "hidden"} overflow-hidden transition-all duration-300 basis-full grow sm:block`}>
                {!nomeUser ? <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">

                  <DarkMode />
                  <Link to={"/"} onClick={() => setCurrentPage(1)} class={`font-medium text-xl ${currentPage === 1 ? "text-gray-800 hover:text-gray-900 " : "text-gray-50 hover:text-gray-900"} sm:py-3  hover:text-gray-400 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer `} aria-current="page">home</Link>
                  <Link to={"/sobre"} onClick={() => setCurrentPage(2)} class={`font-medium text-xl ${currentPage === 2 ? "text-gray-800 hover:text-gray-900 " : "text-gray-50 hover:text-gray-900"} sm:py-3  hover:text-gray-400 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer `}>sobre</Link>
                  <Link to={"/contato"} onClick={() => setCurrentPage(3)} class={`font-medium text-xl ${currentPage === 3 ? "text-gray-800 hover:text-gray-900 " : "text-gray-50 hover:text-gray-900"} sm:py-3  hover:text-gray-400 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer `}>contato</Link>
                </div>
                  :
                  <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                    <DarkMode />

                    <Link to={"/adm"} onClick={() => setCurrentPage(1)} class={`font-medium text-xl ${currentPage === 1 ? "text-gray-800 hover:text-gray-900 " : "text-gray-50 hover:text-gray-900"} sm:py-3  hover:text-gray-400 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer `}>cadastro</Link>
                    <Link to={"/edit"} onClick={() => setCurrentPage(2)} class={`font-medium text-xl ${currentPage === 2 ? "text-gray-800 hover:text-gray-900 " : "text-gray-50 hover:text-gray-900"} sm:py-3  hover:text-gray-400 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer `}>substancias</Link>
                    <Link to={"/"} onClick={() => setCurrentPage(3)} class={`font-medium text-xl ${currentPage === 3 ? "text-gray-800 hover:text-gray-900 " : "text-gray-50 hover:text-gray-900"} sm:py-3  hover:text-gray-400 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer `} aria-current="page">home</Link>
                    <Link to={"/login"} onClick={() => {
                      logout();
                      setCurrentPage(1)
                    }} class={`font-medium text-xl ${currentPage === 3 ? "text-gray-800 hover:text-gray-900 " : "text-gray-50 hover:text-gray-900"} sm:py-3  hover:text-gray-400 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer `} aria-current="page">sair</Link>

                  </div>

                }

              </div>
            </nav>
          </header>
          <main  onClick={() => setShowMenu(false)} className={`flex ${ showMenu &&"bg-[#00000090]"} flex-col justify-between h-full`}>
            <div class="h-full pt-12 mt-5 ">
              {children}

            </div>

            <footer class="mt-auto text-center py-5">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-2 flex-col md:flex-row items-center justify-center">
                <p class={` ${showMenu  ? "text-gray-50":"text-gray-500"}`}>© Oque é isso no meu rótulo?   (IFBA) Instituto Federal da Bahia</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Logotipo_IFET.svg" alt="Logo do IFBA" className='h-5 w-auto' />
              </div>
            </footer>

          </main>


        </div>
      </body>
    </>
  );
}
export default GlobalLayout;
