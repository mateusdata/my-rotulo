import React, { useState } from 'react';
import { Select, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import GlobalLayout from '../../layouts/GlobalLayout';

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

  return (
    <GlobalLayout>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Pesquisar"
            />
            {alimentos.length > 0 && (
              <div className="absolute z-10 bg-white w-full mt-1 p-2 border border-gray-200 rounded shadow-md">
                {alimentos.map((item) => (
                  <p key={item.nome_pt} className="cursor-pointer hover:bg-gray-100 p-1" onClick={() => setSearchValue(item.nome_pt)}>
                    {item.nome_pt}
                  </p>
                ))}
              </div>
            )}
          </div>
          <Select
            style={{ flex: 'none', width: 120 }}
            placeholder="Categoria"
            onChange={(value) => console.log(value)}
          >
            <Option value="Alimentícios">Alimentícios</Option>
            <Option value="Corporais">Corporais</Option>
            <Option value="Saneantes">Saneantes</Option>
          </Select>
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={listSeachAlimentos}
          >
            Pesquisar
          </Button>
        </div>

        {alimentos.length > 0 && (
          <div className="mt-4">
            {alimentos.map((item) => (
              <div key={item.nome_pt} className="mt-4">
                <h1>{item.nome_pt}</h1>
                <p>{`Inglês - ${item.nome_us}`}</p>
                <p>{`Latim - ${item.nome_latim}`}</p>
                <p>Função Principal</p>
                <p>{item?.funcao_principal}</p>
                <p>Origem</p>
                <p>{item?.origin}</p>
                <p>Categoria</p>
                <p>{item?.categoria_id === 1 ? "Alimenticios" : item?.categoria_id === 2 ? "Corporais" : "Saneantes"}</p>
              </div>
            ))}
          </div>
        )}

        {erro && <h1 className="mt-4 text-red-600">Erro na busca</h1>}
      </div>
    </GlobalLayout>
  );
}

export default Home;
