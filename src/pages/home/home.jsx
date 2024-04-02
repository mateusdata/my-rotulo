import React, { useState } from 'react';
import { Select, Input, Button, AutoComplete, ConfigProvider } from 'antd';
import { ClearOutlined, SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import GlobalLayout from '../../layouts/GlobalLayout';
import Logo from "../../images/marca.png"


const { Option } = Select;
function Home() {
  const [alimentos, setAlimentos] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [categoria, setCategoria] = useState('1');

  const [sugestaoAlimentos, setSugestaoAlimentos] = useState([]);

  const [erro, setErro] = useState(false);


  const getSugestao = async () => {
    try {
      const response = await axios.get('/seach', {
        params: {
          values: searchValue, categoria
        }
      });
      setSugestaoAlimentos(response?.data);
    } catch (error) {
    }
  };

  const getAlimentos = async () => {
    if (searchValue.length > 0) {
      setAlimentos([]);
      try {
        const response = await axios.get('/seachalimentos', {
          params: {
            values: searchValue, categoria
          }
        });
        setAlimentos(response?.data);
        setErro(response.data.length < 1);
      } catch (error) {

      }
    }
  };

  const options = sugestaoAlimentos?.map((alimento) => ({
    value: alimento?.nome_pt,
  }));

  return (
    <GlobalLayout>
      <div className=" flex items-center justify-center md:min-h-[60vh] flex-col">

        <form onSubmit={getAlimentos} className="flex   w-[100%] md:w-[550px] flex-col   p-10 md:p-12  gap-4">

          <img src={Logo} alt="" className='object-contain hover:object-scale-down md:max-h-24 max-h-16' />
          <ConfigProvider
            theme={{
              token: {
                /* here is your global tokens */
                borderRadiusSM: 20,
                borderRadius: 20,
              },
            }}
          >
            <AutoComplete
              onSelect={() => { }}
              value={searchValue}
              options={options}
              onKeyDown={getSugestao}
              onChange={(e) => setSearchValue(e)}
              placeholder="Pesquisar substâncias"
              className='h-10 w-full rounded-2xl'

            />

          </ConfigProvider>

          <div className=' flex items-center justify-between md:justify-around'>
            <Select
              className='flex-1'
              style={{ flex: 'none' }}
              defaultValue={"Alimentícios"}
              value={categoria}
              onChange={(value) => setCategoria(value)}
            >
              <Option value="1">Alimentícios</Option>
              <Option value="2">Corporais</Option>
              <Option value="3">Saneantes</Option>
            </Select>
            <Button className='bg-green-500' type="primary" onClick={getAlimentos}>Pesquisar</Button>
          </div>
          <div>
            {alimentos?.map((alimento) => (
              <div key={alimento.id}>
                <h3 className='text-lg font-bold' >{alimento.nome_pt}</h3>
                <p className='text-gray-800'>{`Nome em ingles - ${alimento.nome_us}`}</p>
                <p className='text-gray-800 mb-5'>{`Nome em alternativo - ${alimento.nome_latim}`}</p>
                <span className='text-lg font-semibold '>Função Principal</span>
                <p className='text-gray-800'>{alimento.funcao_principal}</p>
                <p className='text-blue-500'>{"Categoria " + alimento?.categoria_id === 1 ? "Alimenticios" : alimento?.categoria_id === 2 ? "Corporais" : "Saneantes"}</p>

                <div onClick={() => {
                  setAlimentos([]);
                  setSearchValue("");
                  setCategoria("1")
                }} className='group flex w-1/3 rounded-md p-1 hover:text-white hover:bg-red-500 cursor-pointer items-center mt-5 gap-2'>
                  <ClearOutlined className='cursor-pointer text-red-400 group-hover:text-white' />
                  <span>Nova pesquisa</span>
                </div>

              </div>
            ))}
          </div>

        </form>


        {erro && <h1 className="mt-0 text-red-600">Não encontrado</h1>}
      </div>
    </GlobalLayout>
  );
}

export default Home;
