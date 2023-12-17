import { useState } from 'react';
import './App.css';
import axios from '../../axiosConfig';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function Home() {
  const [alimentos, setAlimentos] = useState([]);
  const [seachAlimentos, setseachAlimentos] = useState([]);
  const [values, setValues] = useState([]);
  const [erro, setErro] = useState(false);
  const sugestao = (e) => {
    e?.preventDefault();
    axios.get('/seach', {
      params: {
        values: values
      }
    }).then((response) => {
      setAlimentos(response?.data);
    }).catch((error) => {
    });
  }
  const listSeachAlimentos = (e) => {
    if (values.length > 0) {
      setAlimentos([]);
      e?.preventDefault();
      axios.get('/seachalimentos', {
        params: {
          values: values
        }
      }).then((response) => {
        setseachAlimentos(response?.data);
        if (response.data.length < 1) {
          setErro(true)
          return;
        }
        setErro(false)
      }).catch((error) => {
      });
    }
  }

  return (

    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: "space-between" }}>
      <Header />


      <div className="containeiMain">
        <div class="flex" style={{ width: "520px", maxWidth: "80%" }} >
          <div style={{ width: "100%", bottom: "45vh" }}>
            <select
              style={{ width: "100%", }}
              name="country"
              autoComplete="country-name"
              class='border-none outline-none'
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

            {alimentos.length > 0 && <div style={{
              backgroundColor: "#F3F4F6", borderBottomRightRadius: "1rem", borderBottomLeftRadius: "1rem",
              border: "solid #e5e5e5 1px", justifyContent: "center", alignItems: "center", width: "100%", padding: "10px"
            }}>
              {alimentos?.map((item) => (
                <p className="classhover" style={{ color: "black" }} onClick={() => { setValues(item?.nome_pt); setAlimentos([]); }}>{item?.nome_pt}</p>
              ))}
            </div>}

          </div>
        </div>


        <br /><br /><br /><b><br /></b>
        {erro && <h1>"Erro na busca"</h1>}

      </div>
      {seachAlimentos?.map((item) => {
        let catAux = item?.categoria_id;
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
          <div className="bg-#F3F4F6 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 style={{ fontSize: "2rem" }}>{item.nome_pt}</h2>
                <p className="mt-2 text-3xl  tracking-tight font-extrabold sm:text-4xl">
                  {` Inglês - ${item.nome_us}`}
                </p>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {` Latim - ${item.nome_latim}`}
                </p>
                <p style={{ fontSize: "1.5rem", marginTop: "10px" }}>
                  Função Principal
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {item?.funcao_principal}
                </p>
              </div>
              <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">

                <p className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Origem
                </p>
                <p className="mt-1 text-lg leading-8 text-gray-600">
                  {item?.origin}
                </p>
                <p className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Categoria
                </p>
                <p className="mt-1 text-lg leading-8 text-blue-600">
                  {item?.categoria_id === 1 ? "Alimenticios" : item?.categoria_id === 2 ? "Corporais" : "Saneantes"}
                </p>

              </div>
            </div>

          </div>
        )
      })}
      <Footer />
    </div>



  );
}

export default Home;
