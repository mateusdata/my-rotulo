import { ErrorMessage } from '@hookform/error-message'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios'
import { async } from 'q'
import { cpf } from 'cpf-cnpj-validator';
import { Contexto } from '../../context/context'

const LoginPage = () => {
  const { login } = useContext(Contexto);
  const schema = yup.object({
    cpf: yup.string().min(11, "Informe um CPF válido").max(15, "CPF muito grande").required("Obrigatorio"),
    senha: yup.string().min(4, "Senha muito pequena").max(15, "Senha muito grande").required("Obrigatorio")
  })
  const { register, watch, handleSubmit, setError, formState: { errors } } = useForm({
    defaultValues: {
      cpf: "",
      senha: ""
    },
    resolver: yupResolver(schema)
  })
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/login", data)
      console.log(response.data)
      if (response.data.status === 200) {
        return login(watch("cpf"));

      }
      setError("senha", { message: "Ocorreu um erro" })

    } catch (error) {
      setError("senha", { message: "CPF ou senha incorretos" })
      console.log(error);
    }
  }

  return (
    <div>
      <div className="h-full">
        <div className=" bg-green-500 flex h-full items-center justify-center sm:min-h-screen py-16">
          <main className="w-full max-w-md mx-auto p-6">
            <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm  ">
              <div className="p-4 sm:p-7">
                <div className="text-center">
                  <h1 className="block text-2xl font-bold text-gray-800 ">Login</h1>
                  <p className="mt-2 text-sm text-gray-600 ">
                    Fazer login em meu rótulo -
                    <Link to={"/"} className="text-blue-600 cursor-pointer decoration-2 hover:underline font-medium" >
                      home
                    </Link>
                  </p>
                </div>

                <div className="mt-5">


                  <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 ">Or</div>


                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-y-4">

                      <div>
                        <label for="CPF" className="block text-sm mb-2 ">CPF </label>
                        <div className="relative">

                          <input {...register("cpf")} className="py-3 px-4 block w-full border-gray-200 border focus:outline-blue-600 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none   " aria-describedby="CPF-error" />
                          <p className='text-red-600'>{errors?.cpf?.message}</p>

                          <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                            <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                        </div>
                        <p className="hidden text-xs text-red-600 mt-2" id="CPF-error">Please include a valid CPF address so we can get back to you</p>
                      </div>

                      <div>
                        <div className="flex justify-between items-center">
                          <label for="senha" className="block text-sm mb-2 ">SENHA</label>
                          {false && <a className="text-sm text-blue-600 decoration-2 hover:underline font-medium" href="../examples/html/recover-account.html">Forgot senha?</a>}
                        </div>
                        <div className="relative">

                          <input  {...register("senha")} type="password" id="senha" name="senha" className="py-3 px-4 block w-full border-gray-200 border focus:outline-blue-600 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none   " aria-describedby="senha-error" />
                          <p className='text-red-600'>{errors?.senha?.message}</p>

                          <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                            <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                        </div>
                        <p className="hidden text-xs text-red-600 mt-2" id="senha-error">8+ characters required</p>
                      </div>



                      <div className="flex items-center">
                        <div className="flex">
                          <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 " />
                          <div className="ms-3">
                            <label for="remember-me" className="text-sm cursor-pointer ">Lembrar senha</label>
                          </div>
                        </div>

                      </div>


                      <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Entrar</button>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
