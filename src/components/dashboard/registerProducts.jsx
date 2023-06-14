import React, { useContext } from "react";
import { useState } from "react";
import axios from 'axios';
import { Contexto } from "../../context/context";

export default function RegisterProducts() {
  const [selectedValue, setSelectedValue] = useState('');
  const [namePt, setNamePt] = useState("");
  const [nameUs, setNameUs] = useState("");
  const [nameLatin, setNameLatin] = useState("");
  const [mainFunction, setMainFunction] = useState("");
  const [origin, setOrigin] = useState("");

  const [inputDisable, setInputDisable] = useState(false);
  const [erro, setErro] = useState("");
  const {nomeUser} = useContext(Contexto);
  
  const cadastrarAlimento = (e) => {
  
    e?.preventDefault();
    if(selectedValue==="Categoria"){
      setErro("ERRO em");
      return;
    }
    setErro("")
    if (namePt && mainFunction && selectedValue !== "Categoria" && nameUs && nameLatin) {
      
    
      function formatDateToBR(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      }
      const currentDate = new Date();
      const DataDeAdicao = formatDateToBR(currentDate);
    
      axios.put("https://oqueeissonomeurotulo.vercel.app/add", {
        namePt,
        nameUs,
        nameLatin,
        mainFunction,
        origin,
        selectedValue,
        DataDeAdicao,
        nomeUser
        
      }).then((response) => {
        console.log(response);
        //setAlimentos(response?.data)
        setNamePt("");
        setMainFunction("")
        setNameLatin("")
        setNameUs("")
        setOrigin("")
        setSelectedValue("Categoria")
        setInputDisable(false)
      }).catch((error) => {
        console.error(error);
      });
      
      return;
    }

   
  }
  /*const deleteTable = () => {
    axios.put("https://oqueeissonomeurotulo.vercel.app/delete").then((response) => {
      console.log(response);
      //setAlimentos(response?.data)
    }).catch((error) => {
      console.error(error);
    });
  }*/
  return (
    <form >
      <div className="space-y-12 flex items-center justify-center">

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="mt-3 text-xl leading-6 text-black-800 font-bold">Cadastro de rótulos de alimentos</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Simplifique o cadastro de rótulos alimentícios.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div style={{ display: "flex", gap: "0.5rem", flexWrap:"wrap" }}>
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Nome em Português
                </label>
                <div className="mt-2">
                  <input
                    required
                    onChange={(e) => setNamePt(e.target.value)}
                    value={namePt}
                    placeholder='Nome pt-br'
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0.1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Nome em inglês
                </label>
                <div className="mt-2">
                  <input
                    required
                    onChange={(e) => setNameUs(e.target.value)}
                    value={nameUs}
                    placeholder='Nome en-us'
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0.1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Nome em latim
                </label>
                <div className="mt-2">
                  <input
                    required
                    onChange={(e) => setNameLatin(e.target.value)}
                    value={nameLatin}
                    placeholder='Nome Latin'
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className=" block w-full rounded-md border-0.1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="border-b border-gray-900/10 pb-12">
              <hr className="mt-4" />


              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">


                </div>

                <div className="col-span-full">
                  <label className="mt-3 text-xl leading-6 text-black-800 font-bold">
                    Função principal:
                  </label>
                  <div className="mt-2">
                    <textarea
                      onChange={(e) => setMainFunction(e.target.value)} value={mainFunction}
                      id="mainFuncion"
                      name="mainFuncion"
                      rows={3}
                      className="block w-full rounded-md border-0.1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                  
                </div>

                <div className="col-span-full">
                  <label className="mt-3 text-xl leading-6 text-black-800 font-bold">
                    Origem:
                  </label>
                  <div className="mt-2">
                    <textarea
                      onChange={(e) => setOrigin(e.target.value)} value={origin}
                      id="origin"
                      name="origin"
                      rows={3}
                      className="block w-full rounded-md border-0.1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                  <p className="mt-3 text-xl leading-6 text-black-800 font-bold">Escolha a categoria do ingrediente.</p>
                </div>



              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6  text-gray-900" style={{color: erro?  "red": false}}>
              {erro && erro} Categoria 
              </label>
              <div className="mt-2">
                <select
                  value={selectedValue}
                  onChange={(e) => setSelectedValue(e.target.value)}
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0.1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option className="text-red-700">Categoria</option>
                  <option>Alimentícios</option>
                  <option>Corporais</option>
                  <option>Saneantes</option>
                </select>
                
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center space-x-10" style={{ gap: "1rem" }}>
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancelar
        </button>
        <button
          disabled={inputDisable}
          onClick={cadastrarAlimento}
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

        >
          Salvar
        </button>

      </div>


    </form>
  )
}
