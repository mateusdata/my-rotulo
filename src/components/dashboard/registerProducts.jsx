import React, { useContext } from "react";
import axios from '../../axiosConfig';
import { Contexto } from "../../context/context";
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Select, notification } from 'antd';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const { TextArea } = Input;
const { Option } = Select;

const schema = yup.object().shape({
  namePt: yup.string().required('Obrigatório'),
  nameUs: yup.string().required('Obrigatório'),
  ref: yup.string().required('Obrigatório'),
  nameLatin: yup.string().required('Obrigatório'),
  origin: yup.string().required('Obrigatório'),
  mainFunction: yup.string().required('Obrigatório'),
  category: yup.number().required('Obrigatório').typeError('Selecione uma categoria'),
  
});


export default function RegisterProducts() {
  const data = { namePt: "", nameUs: "", nameLatin: "", origin: "", mainFunction: "", category: "Selecione", ref:"" }

  const { control, reset, handleSubmit, setError, formState: { errors } } = useForm({
    resolver: yupResolver(schema),

    defaultValues: data,
    mode: "all"
  });
  const { nomeUser } = useContext(Contexto);


  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: 'Substância foi criada com sucesso',
      description: '',
    });
  }

  const cadastrarAlimento = (data) => {
    console.log(data);
    if (!data.category) {
      setError("category", {
        type: "manual",
        message: "Por favor selecione uma categoria!"
      });
      return;
    }

    axios.put('/add', {
      ...data,
      DataDeAdicao: new Date(),
      nomeUser
    }).then((response) => {
     openNotificationWithIcon('success')
    reset();
    }).catch((error) => {
      setError("namePt", { message: error?.response?.data?.error });
    });
  };

  function formatDateToBR(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <div className="md:w-3/4  mx-auto px-4">
      {contextHolder}

      <h1 className="text-2xl text-center font-bold mb-5">Cadastro de substância </h1>
      <p className="mb-5 text-center">Simplifique o cadastro de substancias de rótulos de alimentos.</p>
      <form className="flex flex-col gap-2 " onSubmit={handleSubmit(cadastrarAlimento)}>
        <div className="w-full flex flex-col gap-5  sm:px-48 ">
          <div className="flex md:flex-row flex-col gap-2">
            <div className="w-full  ">
              <Controller
                name="namePt"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Nome em Português" />
                )}
              />
              <p className='text-red-600 text-left text-sm'>{errors?.namePt?.message}</p>
            </div>

            <div className="w-full ">
              <Controller
                name="nameUs"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Nome em Inglês" />
                )}
              />
              <p className='text-red-600 text-left text-sm'>{errors?.nameUs?.message}</p>
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-2">
            <div className="w-full">
              <Controller
                name="nameLatin"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Nome alternativo" />
                )}
              />
              <p className='text-red-600 text-left text-sm'>{errors?.nameLatin?.message}</p>
            </div>

            <div className="w-full">
              <Controller
                name="origin"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Origem" />
                )}
              />
              <p className='text-red-600 text-left text-sm'>{errors?.origin?.message}</p>
            </div>
            <div className="w-full">
              <Controller
                name="ref"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Referência" />
                )}
              />
              <p className='text-red-600 text-left text-sm'>{errors?.ref?.message}</p>
            </div>
          </div>
          

          <div className="w-full">
            <Controller
              name="mainFunction"
              control={control}
              render={({ field }) => (
                <TextArea {...field} placeholder="Função Principal" style={{ height: '150px' }} />

              )}
            />
            <p className='text-red-600 text-left text-sm'>{errors?.mainFunction?.message}</p>
          </div>

          <div className="w-full">
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select className="w-full" {...field} placeholder="Categoria">
                  <Option value={1} >Alimentícios</Option>
                  <Option value={2}>Corporais</Option>
                  <Option value={3}>Saneantes</Option>
                </Select>
              )}
            />
            <p className='text-red-600 text-left text-sm'>{errors?.category?.message}</p>
          </div>

          <Button className="bg-green-500" type="primary" htmlType="submit">
            Cadastrar
          </Button>
        </div>
      </form>
    </div>
  );
};
