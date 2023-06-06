import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import Loading from '../../components/loading/loading';
import FormAddRotulos from '../../components/form add itens/form';
import Header from '../../components/header/header';
import PulseLoader from 'react-spinners/PulseLoader';
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
        if(response.data.length<1){
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
    <Header/>
    <SearchBar/>
      <div className="">


        <form style={{ width: "50%", minWidth: "330px", padding: "2rem 1rem", display: "flex", flexDirection: "column" }}>

          <form>
            <div class="flex">
              <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">ALimentos</label>
            
              <div class="relative w-full">
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
                  <span class="sr-only"></span>
                </button>
              </div>
            </div>
          </form>
                
        </form>

        {alimentos?.map((item) => (
         
            <h1 style={{color:"black", right:"4rem"}} onClick={() => { setValues(item?.NomeDoAlimento); setAlimentos([]); }}>{item?.NomeDoAlimento}</h1>
         
        ))}

        <br /><br /><br /><b><br /></b>
        
        {erro&& <h1>"Erro na busca"</h1> }
        {seachAlimentos?.map((item)=>(
        <ul className='aliementos' key={item.ID}>
          <h2 style={{color:"blue"}}>{ item.NomeDoAlimento.toUpperCase()}</h2>
          <br />
          <li className='liAliemntos'>{"ID do alimento: " +  item.ID}</li>
          <li className='liAliemntos'>{ "Nome do alimento: " +  item.NomeDoAlimento}</li>
          <li className='liAliemntos'>{ "Rotulo: " +  item.Rotulo}</li>
          <li className='liAliemntos'>{ "Data de adição: " +  item.DataDeAdicao}</li>  
        </ul>
      ))}
        
      </div>

    </>
  );
}

export default Home;
