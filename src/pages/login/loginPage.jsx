import React, { useState } from 'react'
import { useContext } from 'react';
import { Contexto } from '../../context/context';
import axios from '../../axiosConfig';
import { Link } from 'react-router-dom';
export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [req, setReq] = useState([]);
  const { login } = useContext(Contexto);

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post('/login', {
      cpf: cpf,
      senha: password
    }).then((response) => {
      setReq(response?.data);
      if (response?.data?.status === 200) {
        login(cpf);
      }
    });

  }

  return (
    <>
      <div style={{ fontSize: "8rem", minHeight: "100vh" }} className="flex min-h-full flex-1 flex-col justify-center bg-gray-900 px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-100">
            Meu rotulo
          </h1>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-100">
            Entrar em sua conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6  flex flex-col  gap-8" action="#">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-100">
                CPF
              </label>
              <div className="mt-2">
                <input
                  placeholder='Cpf'
                  onChange={(e) => setCpf(e.target.value)} value={cpf}
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  className="block w-full  bg-gray-950 text-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-100">
                  SENHA
                </label>
                <div className="text-sm">
                  <Link className='ont-semibold text-gray-300 hover:text-indigo-500' to={"/"}>Esqueceu sua senha?</Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  placeholder='Senha'
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full  bg-gray-950 text-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleLogin}
                type="submit"
                className="mt-4   text-2xl flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Entrar
              </button>
            </div>
          </form>

          <p className="mt-2 text-center text-sm text-gray-500">
            Não quer entrar?{' '}
            <Link className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500' to={"/"}>Voltar para pagina pricipal</Link>
            <h3 style={{ color: "red" }}>{req?.erro}</h3>
          </p>
        </div>
      </div>
    </>
  )
}
