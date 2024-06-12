import React, { useContext, useEffect, useState } from 'react';
import { Select, Input, Button, AutoComplete, ConfigProvider } from 'antd';
import { ClearOutlined, SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import GlobalLayout from '../../layouts/GlobalLayout';
import Logo from "../../images/marca.png"
import LogoDark from "../../images/marca-dark.png"
import { Contexto } from '../../context/context';
import 'animate.css';




function Home() {
  const [alimentos, setAlimentos] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [categoria, setCategoria] = useState(null);
  const [sugestaoAlimentos, setSugestaoAlimentos] = useState([]);
  const { darkMode, nomeUser } = useContext(Contexto);

  const [erro, setErro] = useState(false);

  useEffect(() => {
    if (nomeUser) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }

  }, [darkMode, nomeUser]);


  const getSugestao = async (value) => {
    try {
      const response = await axios.get('/seach', {
        params: {
          values: value.trim(), categoria
        }
      });
      setSugestaoAlimentos(response?.data);
    } catch (error) {
    }
  };

  const getAlimentos = async (e) => {
    e?.preventDefault()
    setAlimentos([])
    if (searchValue.length > 0) {
      setAlimentos([]);
      try {
        const response = await axios.get('/seachalimentos', {
          params: {
            values: searchValue, categoria
          }
        });
        setAlimentos(response?.data);
        setOptions([])
        setSearchValue("");
        setErro(response.data.length < 1);
      } catch (error) {

      }
    }
  };

  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (sugestaoAlimentos) {
      const newOptions = sugestaoAlimentos.map((alimento) => ({
        value: alimento?.nome_pt,
      }));
      setOptions(newOptions);
      return
    }
    setOptions([]);

  }, [sugestaoAlimentos]);



  return (
    <GlobalLayout>
      <div className=" flex items-center justify-center md:min-h-[60vh] flex-col">

        <form onSubmit={getAlimentos} className="flex   w-[100%] md:w-[550px] flex-col   p-10 md:p-12  gap-4">

          <img onClick={() => {
            setAlimentos([]);
            setOptions([])
            setSearchValue("");
            setCategoria(null);
          }} src={darkMode ? LogoDark : Logo} alt="" className='object-contain cursor-pointer hover:object-scale-down md:max-h-24 max-h-16' />
          <ConfigProvider
            theme={{
              token: {

                borderRadiusSM: 20,
                borderRadius: 20,
                colorBgBlur: "gray",
                colorBgLayout: "gray",
                colorBgContainer: darkMode && "#212223",
                colorText: darkMode && "gray",
                colorBorderBg: darkMode && "gray",
                colorTextPlaceholder: darkMode && "gray",
                colorBorder: darkMode ? "#212223" : "#c6c4c4", // Cor da borda padro
                colorBorderHover: darkMode && "gray", // Cor da borda quando o mouse está sobre o componene
                colorBgElevated: darkMode ? "#212223" : "white",

                colorTextBgElevated: darkMode ? "gray" : "white",
                outline: "none"

              },
            }}
          >
            <AutoComplete
              disabled={!categoria}
              onSelect={() => { }}
              value={searchValue}
              options={options}
              onChange={(e) => {
                getSugestao(e)
                setSearchValue(e)
              }}
              placeholder="Pesquisar substâncias"
              className='h-10 w-full rounded-2xl hover:border-none hover:outline-none'
            />

          </ConfigProvider>
          <div className=' flex items-center justify-between md:justify-around mb-8'>

            <select
              defaultValue={"Selecione"}
              className={`w-[120px] bg-green-600 text-white dark:bg-gray-800 border dark:active:bg-gray-600 ctive:bg-gray-50 dark:focus:bg-gray-600 dark:border-gray-600 dark:text-gray-300 py-1.5 px-1 pr-2 rounded-lg leading-tight focus:outline-none  dark:focus:border-gray-500`}
              value={categoria}
              onChange={(e) => {
                setOptions([]);
                setCategoria(e.target.value);
              }}
            >
              <option value="" className="dark:bg-gray-800">Selecione</option>
              <option value="1" className="dark:bg-gray-800">Alimentícios</option>
              <option value="2" className="dark:bg-gray-800">Corporais</option>
              <option value="3" className="dark:bg-gray-800">Saneantes</option>
            </select>



            <button type='submit'
              className='w-[120px] bg-green-600 text-white dark:bg-gray-800 border
             dark:active:bg-gray-600
             ctive:bg-gray-50 dark:focus:bg-gray-600
             dark:border-gray-600 dark:text-gray-300 
             py-1.5 px-1 pr-2 rounded-lg leading-tight focus:outline-none  
             dark:focus:border-gray-500'
            >
              Pesquisar
            </button>
          </div>

          <div>

            {alimentos.length > 0 && (
              <div className='' key={alimentos[0].id}>
                <h3 className='text-lg font-bold  dark:text-gray-50 '>{alimentos[0].nome_pt}</h3>
                <p className='text-gray-800 dark:text-gray-50'>{`Nome em inglês - ${alimentos[0].nome_us}`}</p>
                <p className='text-gray-800 dark:text-gray-50 mb-5'>{`Nome em alternativo - ${alimentos[0].nome_latim}`}</p>
                <span className='text-lg  text-gray-800 dark:text-gray-50 font-semibold'>Função Principal</span>
                <p className='text-gray-800  dark:text-gray-50  mb-5'>{alimentos[0].funcao_principal}</p>
                <span className='text-lg text-gray-800 dark:text-gray-50 font-semibold'>Origem</span>
                <p className='text-gray-800 dark:text-gray-50 mb-5'>{alimentos[0].origin}</p>
                <div className='flex gap-1 flex-col'>
                  <span className='text-lg text-gray-800 dark:text-gray-50 font-semibold'>Categoria</span>
                  <p className='text-gray-800 dark:text-gray-50 mb-5'>{(alimentos[0].categoria_id === 1 ? "Alimentícios" : alimentos[0].categoria_id == 2 ? "Corporais" : "Saneantes")}</p>
                </div>

              </div>
            )}

          </div>

        </form>


        {erro && <h1 className="mt-0 text-red-600">Não encontrado</h1>}
      </div>
    </GlobalLayout>
  );
}

export default Home;
