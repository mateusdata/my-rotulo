import React, { useEffect, useState } from 'react';
import { Table, Tag, Button, Space, Popconfirm } from 'antd';
import axios from 'axios';
import GlobalLayout from '../../layouts/GlobalLayout';
import Search from 'antd/es/transfer/search';

const { Column } = Table;

const SubstanceEditing = () => {
  const [data, setData] = useState([]);
  const [nome_pt, setNome_pt] = useState("");

  useEffect(() => {
    axios.get('/show').then((response) => {
      setData(response.data);
    });
  }, []);

  const updatPage = () => {
    axios.get('/show').then((response) => {
      setData(response.data);
    });
  }
  const handleDelete = (id) => {
    axios.delete(`/delete/item/${id}`).then(() => {
      setData(data?.filter(item => item?.id !== id));
    });
  };

  const onSearch = async () => {
    try {
      const response = await axios.get(`/seach-substance/${nome_pt}`);
      setData(response.data)
      console.log(response.data);
    } catch (error) {
      updatPage()
    }
  }
  return (
    <GlobalLayout>
      <div className='w-full flex items-center justify-center flex-col'>

        <h1 className="text-xl text-center font-semibold">Substâncias cadastradas</h1>
        <div className='p-1 px-28 pt-2 w-full'>


          <div className='border rounded-lg shadow-sm p-1 '>
            <div className='w-full sm:w-80 mb-2'>
              <Search
               onChange={(e) => {
                setNome_pt(e.target.value);
                onSearch();
                if (!e.target.value) {
                  updatPage();
                }
              }}
                placeholder="Pesquisar substâncias"
                allowClear enterButton="Search" size="large" />

            </div>
            <Table dataSource={data} scroll={{ x: true }} pagination={{ pageSize:4 }}>
              <Column title="Nome em Português" dataIndex="nome_pt" key="nome_pt" />
              <Column title="Nome em Inglês" dataIndex="nome_us" key="nome_us" />
              <Column title="Nome em Latim" dataIndex="nome_latim" key="nome_latim" />
              <Column
                title="Categoria"
                dataIndex="categoria_id"
                key="categoria_id"
                render={(categoria_id) => {
                  let categoryName = '';
                  let color = 'blue';
                  switch (categoria_id) {
                    case 1:
                      categoryName = 'Alimentícios';
                      color = 'geekblue';
                      break;
                    case 2:
                      categoryName = 'Corporais';
                      color = 'green';
                      break;
                    case 3:
                      categoryName = 'Saneantes';
                      color = 'volcano';
                      break;
                    default:
                      categoryName = 'Outro';
                  }
                  return (
                    <Tag color={color} key={categoria_id}>
                      {categoryName}
                    </Tag>
                  );
                }}
              />
              <Column
                title="Ação"
                key="action"
                render={(text, record) => (
                  <Space size="middle">
                    <Popconfirm
                      title="Deletar item"
                      description="Tem certeza que deseja deletar?"
                      onConfirm={() => handleDelete(record?.id)}
                      okButtonProps={{ className: "bg-blue-400" }}
                      okText="Sim"
                      cancelText="Não"
                    >
                      <Button className='bg-red-400' type="primary">Excluir</Button>

                    </Popconfirm>
                  </Space>
                )}
              />
            </Table>

          </div>
        </div>
      </div>
    </GlobalLayout>
  );
};

export default SubstanceEditing;
