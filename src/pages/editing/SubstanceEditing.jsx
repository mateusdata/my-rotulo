import React, { useEffect, useState } from 'react';
import { Table, Tag, Button, Space, Popconfirm } from 'antd';
import axios from 'axios';
import GlobalLayout from '../../layouts/GlobalLayout';

const { Column } = Table;

const SubstanceEditing = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/show').then((response) => {
      setData(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/delete/item/${id}`).then(() => {
      setData(data.filter(item => item.id !== id));
    });
  };

  return (
    <GlobalLayout>
      <h1 className="text-xl text-center font-semibold">Substâncias cadastradas</h1>
      <div className='p-12'>

        <div className='border rounded-lg shadow-sm '>
          <Table dataSource={data} scroll={{ x: true }} pagination={{ pageSize: 5 }}>
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
                    onConfirm={() => handleDelete(record.id)}
                    okButtonProps={{className:"bg-blue-400"}}
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
    </GlobalLayout>
  );
};

export default SubstanceEditing;
