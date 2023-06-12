import { useState } from 'react';
import './App.css';
import axios from "axios";
import Header from '../../components/header/header';
import SearchBar from '../../components/seach/seach';

function Home() {
  const [alimentos, setAlimentos] = useState([]);
  const [seachAlimentos, setseachAlimentos] = useState([]);
  const [values, setValues] = useState([]);
  const [erro, setErro] = useState(false);
  const sugestao = (e) => {
    e?.preventDefault();
    axios.get("https://oqueeissonomeurotulo.vercel.app/seach", {
      params: {
        values: values
      }
    }).then((response) => {
      console.log(response);
      setAlimentos(response?.data);
    }).catch((error) => {
      console.error(error);
    });
  }
  const listSeachAlimentos = (e) => {
    if (values.length > 0) {
      setAlimentos([]);
      e?.preventDefault();
      axios.get("https://oqueeissonomeurotulo.vercel.app/seachalimentos", {
        params: {
          values: values
        }
      }).then((response) => {
        console.log(response);
        setseachAlimentos(response?.data);
        if (response.data.length < 1) {
          setErro(true)
          return;
        }
        setErro(false)
      }).catch((error) => {
        console.error(error);
      });
    }
  }
  return (
    <>
      <Header />
      <SearchBar />
      <div className="containeiMain">
          <div class="flex" style={{ width: "520px", maxWidth: "80%" }} >
            <div style={{ width: "100%" }}>
              <select
                style={{ width: "100%" }}
                name="country"
                autoComplete="country-name"
                className="block rounded-md border-1 py-1.5 text-blue-500 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option className="text-red-700">Categoria</option>
                <option>Alimentícios</option>
                <option>Corporais</option>
                <option>Saneantes</option>
              </select>
              <div class="relative">
                <input value={values} onChange={(e) => {

                  setValues(e.target.value);
                  if (true) {
                    sugestao();
                    return;
                  }
                  setAlimentos([]);

                  //alert("maior")

                }} type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Pesquisar" required />
                <button onClick={listSeachAlimentos} type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  <span class="sr-only">Search</span>
                </button>
              </div>
             
          {alimentos.length > 0 && <div style={{ backgroundColor: "#F3F4F6",   borderBottomRightRadius: "1rem", borderBottomLeftRadius: "1rem",
          border: "solid #e5e5e5 1px",justifyContent: "center", alignItems: "center", width: "100%", padding: "10px" }}>
             {alimentos?.map((item) => (
          <p className="classhover" style={{ color: "black" }} onClick={() => { setValues(item?.nome_pt); setAlimentos([]); }}>{item?.nome_pt}</p>
          ))}
          </div>}
       
            </div>
          </div>
        

        <br /><br /><br /><b><br /></b>
        {erro && <h1>"Erro na busca"</h1>}
        {seachAlimentos?.map((item) => {
          let catAux = item.categoria_id;
          if (catAux === 1) {
            catAux = "Alimentícios"
          }
          else if (catAux === 2) {
            catAux = "Corporais"
          }
          else {
            catAux = "Saneantes"
          }

          return (
            <div className="main">
              <h2 style={{ color: "blue" }}>{item?.nome_pt?.toUpperCase()}</h2>
              <br />
              <ul  key={item.ID}>
                <div>

                </div>
              <li className='liAliemntos'>{"ID do alimento: " + item.id}</li>
              <li className='liAliemntos'>{"Nome em portugues: " + item.nome_pt}</li>
              <li className='liAliemntos'>{"Nome em inlges: " + item.nome_us}</li>
              <li className='liAliemntos'>{"funcao principal: " + item.funcao_principal}</li>
              <li className='liAliemntos'>{"origin: " + item.origin}</li>
              <li className='liAliemntos'>{"adm_criador: " + item.adm_criador}</li>
              <li className='liAliemntos'>{"data_criacao: " + item.data_criacao}</li>
              <li className='liAliemntos'>{"categoria_id: " + catAux}</li>
            </ul>
            </div>
          )
        })}

      </div>

    </>


  );
}

export default Home;
