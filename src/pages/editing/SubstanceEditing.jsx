import React, { useContext, useEffect, useState } from 'react';
import { Table, Tag, Button, Space, Popconfirm, Modal, notification } from 'antd';
import axios from 'axios';
import Search from 'antd/es/transfer/search';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import { Contexto } from '../../context/context';
import GlobalLayoutAdm from '../../layouts/GlobalLayoutAdm';

const { Column } = Table;

const SubstanceEditing = () => {
  const [data, setData] = useState([]);
  const [nome_pt, setNome_pt] = useState("");
  const [open, setOpen] = useState(false)
  const [currentData, setCurrentData] = useState([])
  const schema = yup.object({
    id: yup.number().nullable(),
    DataDeAdicao: yup.string(),
    category: yup.string(),
    namePt: yup.string().required("⛔ Campo obrigatório"),
    ref: yup.string().required("⛔ Campo obrigatório"),
    nameUs: yup.string().required("⛔ Campo obrigatório"),
    nameLatin: yup.string().required("⛔ Campo obrigatório"),
    mainFunction: yup.string().required("⛔ Campo obrigatório"),
    origin: yup.string().required("⛔ Campo obrigatório"),
  });

  const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm({
    defaultValues: {
      id: null,
      DataDeAdicao: new Date(),
      category: "",
      namePt: "",
      nameUs: "",
      nameLatin: "",
      mainFunction: "",
      origin: "",
      ref: "",
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = async (formData) => {
    try {
      await axios.put(`/update-substance/${watch("id")}`, formData);
      // Handle success
      updatPage()
      openNotificationWithIcon('success')
      setCurrentData([])
      reset()
      setOpen(false)

    } catch (error) {
      // Handle error
    }
  };


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

  const handleEdit = (record) => {
    // Aqui você pode abrir um modal ou outra forma de edição com os dados do item
    console.log("Editando item:", record);
  };
  useEffect(() => {
    if (open) {
      setCurrentData(currentData);
    }
  }, [open]);


  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: 'Substância atualizada',
      description: '',
    });
  }


  return (
    <GlobalLayoutAdm>
      {contextHolder}

      <Modal open={open} onCancel={() => setOpen(!open)} footer={false} >
        <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
          <h1 className='text-center font-semibold text-lg'>Atualização de substância</h1>
          <label htmlFor="">Name em português</label>
          <input
            defaultValue={currentData?.nomePt}
            className='border focus:border-blue-500 hover:border-blue-500 rounded-md p-2 focus:outline-blue-500'
            {...register('namePt', { required: 'Name PT é' })}
            placeholder="Name em português"
          />
          {errors.namePt && <span className="text-red-500">{errors.namePt.message}</span>}

          <label htmlFor="">Nome em inglês</label>

          <input
            defaultValue={currentData?.nomeUs}
            className='border focus:border-blue-500 hover:border-blue-500 rounded-md p-2 focus:outline-blue-500'
            {...register('nameUs', { required: 'Name US é' })}
            placeholder="Nome em inglês"
          />
          {errors.nameUs && <span className="text-red-500">{errors.nameUs.message}</span>}

          <label htmlFor="">Nome em latim</label>

          <input
            defaultValue={currentData?.nomeLatin}
            className='border focus:border-blue-500 hover:border-blue-500 rounded-md p-2 focus:outline-blue-500'
            {...register('nameLatin', { required: 'Name Latin é' })}
            placeholder="Nome em latim"
          />
          {errors.nameLatin && <span className="text-red-500">{errors.nameLatin.message}</span>}

          <label htmlFor="">Origem</label>

          <input
            defaultValue={currentData?.origin}
            className='border focus:border-blue-500 hover:border-blue-500 rounded-md p-2 focus:outline-blue-500'
            {...register('origin', { required: 'Origin é' })}
            placeholder="Origin"
          />
          {errors.origin && <span className="text-red-500">{errors.origin.message}</span>}
          
          <label htmlFor="">Referência</label>

          <input
            defaultValue={currentData?.ref}
            className='border focus:border-blue-500 hover:border-blue-500 rounded-md p-2 focus:outline-blue-500'
            {...register('ref', { required: 'Referência é' })}
            placeholder="Referência"
          />
          {errors.ref && <span className="text-red-500">{errors.ref.message}</span>}


          <label htmlFor="">Função principal</label>

          <textarea
            defaultValue={currentData?.mainFunction}
            className='border focus:border-blue-500 hover:border-blue-500 rounded-md p-2 focus:outline-blue-500'
            {...register('mainFunction', { required: 'mainFunction é' })}
            placeholder="Função principal"
          />
          {errors.mainFunction && <span className="text-red-500">{errors.origin.message}</span>}


          <button className='border focus:border-blue-500 hover:border-blue-500 rounded-md p-2 focus:outline-blue-500 bg-green-600 text-white' type="submit">Atualizar</button>
        </form>
      </Modal>




      <div className='w-full flex items-center justify-center flex-col'>

        <h1 className="text-xl text-center font-semibold">Substâncias cadastradas</h1>
        <div className='p-1 px-28 pt-2 w-full'>


          <div className={`border rounded-lg shadow-sm p-1  `}>
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
            <Table
              dataSource={data} scroll={{ x: true }} pagination={{ pageSize: 4 }}>
              <Column title="Nome em Português" dataIndex="nome_pt" key="nome_pt" />
              <Column title="Nome em Inglês" dataIndex="nome_us" key="nome_us" />
              <Column title="Nome em Latim" dataIndex="nome_latim" key="nome_latim" />
              <Column title="Referência" dataIndex="ref" key="ref" />

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
                    <Button className='bg-yellow-400' type="primary" onClick={() => {
                      handleEdit(record)
                      setValue("DataDeAdicao", new Date())
                      setOpen(true)
                      setValue('id', record.id);
                      setValue('namePt', record.nome_pt);
                      setValue('nameUs', record.nome_us);
                      setValue('nameLatin', record.nome_latim);
                      setValue('mainFunction', record.funcao_principal);
                      setValue('origin', record.origin);
                      setValue('category', record.categoria_id);
                      setValue('ref', record.ref);


                    }}>Editar</Button>
                  </Space>
                )}
              />

            </Table>

          </div>
        </div>
      </div>
      <br />
      <pre>{false && JSON.stringify(watch(), null, 2)}</pre>

    </GlobalLayoutAdm>
  );
};

export default SubstanceEditing;
