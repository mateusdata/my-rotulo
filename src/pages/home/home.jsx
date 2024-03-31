import React, { useState } from 'react';
import { Select, Input, Button, AutoComplete, ConfigProvider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import GlobalLayout from '../../layouts/GlobalLayout';
import Logo from "../../images/marca.png"

const { Option } = Select;
function Home() {
  const [alimentos, setAlimentos] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [erro, setErro] = useState(false);

  const sugestao = () => {
    axios.get('/seach', {
      params: {
        values: searchValue
      }
    }).then((response) => {
      setAlimentos(response?.data);
    }).catch((error) => {
    });
  }

  const listSeachAlimentos = () => {
    if (searchValue.length > 0) {
      setAlimentos([]);
      axios.get('/seachalimentos', {
        params: {
          values: searchValue
        }
      }).then((response) => {
        setAlimentos(response?.data);
        setErro(response.data.length < 1);
      }).catch((error) => {
      });
    }
  }

  const options = [
    {
      value: 'Burns Bay Road',
    },
    {
      value: 'Downing Street',
    },
    {
      value: 'Wall Street',
    },
  ];
  return (
    <GlobalLayout>
      <div className=" flex items-center justify-center md:min-h-[60vh] flex-col">

        <div className="flex  w-[100%] md:w-[550px] flex-col   p-10 md:p-12  gap-4">

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
              onSelect={()=>alert("oi")}
              options={options}
              placeholder="Pesquisar alimentos"
              className='h-10 w-full rounded-2xl'
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
              }
            />
          </ConfigProvider>

          <div className=' flex items-center justify-between md:justify-around'>
          <Select
          className='flex-1'
            style={{ flex: 'none' }}
            placeholder="Categoria"
            defaultValue={"Alimentícios"}
            onChange={(value) => console.log(value)}
          >
            <Option value="Alimentícios">Alimentícios</Option>
            <Option value="Corporais">Corporais</Option>
            <Option value="Saneantes">Saneantes</Option>
          </Select>
          <Button className='bg-green-500' type="primary" onClick={listSeachAlimentos}>Pesquisar</Button>
        </div>
        </div>

       
        {erro && <h1 className="mt-4 text-red-600">Erro na busca</h1>}
      </div>
    </GlobalLayout>
  );
}

export default Home;
