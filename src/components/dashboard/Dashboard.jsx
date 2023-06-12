import { Fragment, useContext, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Contexto } from '../../context/context'
import { Link } from 'react-router-dom'
import axios from 'axios';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard({children}) {
  const {logout, user, nomeUser, setNomeUser} = useContext(Contexto);
 
  useEffect(()=>{
    const {cpf} = user;
   
    axios.get("https://oqueeissonomeurotulo.vercel.app/seachUser", {
     params:{
       cpf
     }
    }).then((response)=>{
     console.log(response?.data);
     setNomeUser(response?.data[0]?.nome);
    // alert(user?.cpf + response?.data[0]?.nome ) 
    })
    // eslint-disable-next-line
   },[]);
   

  const navigation = [
    { name: 'Início', href: '/adm', current: true },
    { name: 'Contato', href: '/', current: false },
    { name: 'Sair', href: '/', current: false },
  ]
  
  /*const userNavigation = [
    { name: 'Sua Conta', href: '/' },
    { name: 'Configurações', href: '#' },
    { name: 'Sair', onClick: () => { 
       console.log("Clicou aqui");
       logout();
     } },
  ];
  */
  
  return (
    <>
      <div className="min-h-full ">
        <Disclosure as="nav" className="bg-gray-800 p-3">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-xl font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">View notifications</span>
                        <p>{nomeUser&& nomeUser}</p>
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <p style={{backgroundColor:"orange", padding:"0.5rem",}}>{"M"}</p>
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right border-2 border-solid border-gray-300  bg-white   shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {/*userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                                    ))*/}
                                     <Menu.Item>
                                      <Link   className='block px-4 py-2 text-sm text-gray-700'>Sua Conta</Link>
                                     </Menu.Item>
                                     <Menu.Item>
                                      <Link   className='block px-4 py-2 text-sm text-gray-700'>Configuraçoes</Link>
                                     </Menu.Item>
                                     <Menu.Item>
                                      <Link   onClick={()=>logout()} className='block px-4 py-2 text-sm text-gray-700'>Sair.</Link>
                                     </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <p style={{backgroundColor:"orange", padding:"0.5rem",}}>{"M"}</p>
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                  
                    <Disclosure.Button
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      <Link   className='bblock rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'>Sua Conta</Link>
                    </Disclosure.Button>
                    <Disclosure.Button
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      <Link   className='bblock rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'>Configurações</Link>
                    </Disclosure.Button>
                    <Disclosure.Button
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      <Link  onClick={()=>logout()}    className='bblock rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'>Sair afgora</Link>
                    </Disclosure.Button>
                      
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="mt-3 text-xl leading-6 text-black-800 font-bold"> Cadastro de Ingredientes</h1>
            <hr />
          </div>
        </header>
        <main style={{border:"solid blue 0px", }}>
          <div style={{backgroundColor:"white", padding:"0rem 1rem",minHeight:"100vh", maxWidth:"100%" }} className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 rounded-2xl h-screen">{children}</div>
        </main>
      </div>
    </>
  )
}
