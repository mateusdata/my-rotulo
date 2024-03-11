import React, { useContext } from "react";
import axios from '../../axiosConfig';
import { Contexto } from "../../context/context";
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Select } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

export default function RegisterProducts() {
  const { control, handleSubmit, setError, formState: { errors } } = useForm();
  const { nomeUser } = useContext(Contexto);

  const cadastrarAlimento = (data) => {
    return console.log(data)
    if (data.category === "Categoria") {
      setError("category", {
        type: "manual",
        message: "Por favor selecione uma categoria!"
      });
      return;
    }

    axios.put('/add', {
      ...data,
      DataDeAdicao: formatDateToBR(new Date()),
      nomeUser
    }).then((response) => {
      // Limpar o formulário após o envio
    }).catch((error) => {
      console.error(error);
    });
  }

  function formatDateToBR(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-5">Cadastro de rótulos de alimentos</h1>
      <p className="mb-5">Simplifique o cadastro de rótulos alimentícios.</p>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(cadastrarAlimento)}>
        <Controller
          name="namePt"
          control={control}
          rules={{ required: 'Por favor insira o nome em Português!' }}
          render={({ field }) => (
            <Input {...field} placeholder="Nome em Português" />
          )}
        />

        <Controller
          name="nameUs"
          control={control}
          rules={{ required: 'Por favor insira o nome em Inglês!' }}
          render={({ field }) => (
            <Input {...field} placeholder="Nome em Inglês" />
          )}
        />

        <Controller
          name="nameLatin"
          control={control}
          rules={{ required: 'Por favor insira o nome em Latim!' }}
          render={({ field }) => (
            <Input {...field} placeholder="Nome em Latim" />
          )}
        />

        <Controller
          name="mainFunction"
          control={control}
          rules={{ required: 'Por favor insira a função principal!' }}
          render={({ field }) => (
            <TextArea {...field} placeholder="Função Principal" />
          )}
        />

        <Controller
          name="origin"
          control={control}
          rules={{ required: 'Por favor insira a origem!' }}
          render={({ field }) => (
            <Input {...field} placeholder="Origem" />
          )}
        />

        <Controller
          name="category"
          control={control}
          rules={{ required: 'Por favor selecione uma categoria!' }}
          render={({ field }) => (
            <Select {...field} placeholder="Categoria">
              <Option value="Alimentícios">Alimentícios</Option>
              <Option value="Corporais">Corporais</Option>
              <Option value="Saneantes">Saneantes</Option>
            </Select>
          )}
        />

        <Button type="primary" htmlType="submit">
          Cadastrar
        </Button>
      </form>
    </div>
  );
};
