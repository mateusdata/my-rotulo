import React, { useState } from 'react';
function GlobalLayout({children}) {
  const [showMenu,setShowMenu] = useState(false);
  return (
    <>
      <html class="min-h-screen">
        <body class="bg-slate-50 dark:bg-slate-900 flex min-h-screen w-full">
          <div class=" w-full 2xl:w-[80rem] flex flex-col mx-auto size-full">

            <header class="mb-2 flex flex-wrap sm:justify-start sm:flex-nowrap border-b  border-b-blue-300 z-50 w-full text-sm py-4">
              <nav class="w-full px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
                <div class="flex items-center justify-between">
                  <a class="flex-none text-xl font-semibold dark:text-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-600 hidden sm:block" href="#" aria-label="Brand">Oque é isso no meu rótulo</a>
                  <a class="flex-none text-xl font-semibold dark:text-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-600 sm:hidden" href="#" aria-label="Brand">Meu rótulo</a>

                  <div class="sm:hidden">
                    
                    <button onClick={()=>setShowMenu(!showMenu)} type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-lg border border-gray-700 hover:border-gray-600 font-medium text-gray-300 hover:dark:text-white text:black shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-600 transition-all text-sm" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                      <svg class="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                      <svg class="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </button>
                  </div>
                </div>
                <div id="navbar-collapse-with-animation" class={`hs-collapse ${showMenu && "hidden"} overflow-hidden transition-all duration-300 basis-full grow sm:block`}>
                  <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                    <a class="font-medium text-blue-600 sm:py-3 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" aria-current="page">home</a>
                    <a class="font-medium text-gray-500 hover:text-gray-400 sm:py-3 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">sobre</a>
                    <a class="font-medium text-gray-500 hover:text-gray-400 sm:py-3 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">dev</a>
                    <a class="font-medium text-gray-500 hover:text-gray-400 sm:py-3 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">contato</a>
                  </div>
                </div>
              </nav>
            </header>
            <main id="content" role="main">
              <div class="text-center py-10 px-4 sm:px-6 lg:px-8 ">
               {children}
              </div>
            </main>


            <footer class="mt-auto text-center py-5">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p class="text-gray-500">© Oque é isso no meu rótulo -  2024, (IFBA) - Instituto Federal da Bahia</p>
              </div>
            </footer>
            

          </div>
        </body>
      </html>
    </>
  );
}
export default GlobalLayout;
