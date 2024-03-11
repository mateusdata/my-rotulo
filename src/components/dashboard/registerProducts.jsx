import React, { useContext, useState } from "react";
import axios from '../../axiosConfig';
import { Contexto } from "../../context/context";
import { Form, Input, Button, Select } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

export default function RegisterProducts() {
  const [selectedValue, setSelectedValue] = useState('');
  const [namePt, setNamePt] = useState("");
  const [nameUs, setNameUs] = useState("");
  const [nameLatin, setNameLatin] = useState("");
  const [mainFunction, setMainFunction] = useState("");
  const [origin, setOrigin] = useState("");

  const [inputDisable, setInputDisable] = useState(false);
  const [erro, setErro] = useState("");
  const { nomeUser } = useContext(Contexto);

  const cadastrarAlimento = (e) => {
    e?.preventDefault();
    if (selectedValue === "Categoria") {
      setErro("ERRO em");
      return;
    }
    setErro("")
    if (namePt && mainFunction && selectedValue !== "Categoria" && nameUs && nameLatin) {
      function formatDateToBR(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      }
      const currentDate = new Date();
      const DataDeAdicao = formatDateToBR(currentDate);

      axios.put('/add', {
        namePt,
        nameUs,
        nameLatin,
        mainFunction,
        origin,
        selectedValue,
        DataDeAdicao,
        nomeUser
      }).then((response) => {
        setNamePt("");
        setMainFunction("")
        setNameLatin("")
        setNameUs("")
        setOrigin("")
        setSelectedValue("Categoria")
        setInputDisable(false)
      }).catch((error) => {
        console.error(error);
      });
      return;
    }
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-5">Cadastro de rótulos de alimentos</h1>
      <p className="mb-5">Simplifique o cadastro de rótulos alimentícios.</p>
      <Form
        name="register_form"
        onFinish={cadastrarAlimento}
      >
        <Form.Item
          name="namePt"
          rules={[
            {
              required: true,
              message: 'Por favor insira o nome em Português!',
            },
          ]}
        >
          <Input placeholder="Nome em Português" onChange={(e) => setNamePt(e.target.value)} value={namePt} />
        </Form.Item>

        <Form.Item
          name="nameUs"
          rules={[
            {
              required: true,
              message: 'Por favor insira o nome em Inglês!',
            },
          ]}
        >
          <Input placeholder="Nome em Inglês" onChange={(e) => setNameUs(e.target.value)} value={nameUs} />
        </Form.Item>

        <Form.Item
          name="nameLatin"
          rules={[
            {
              required: true,
              message: 'Por favor insira o nome em Latim!',
            },
          ]}
        >
          <Input placeholder="Nome em Latim" onChange={(e) => setNameLatin(e.target.value)} value={nameLatin} />
        </Form.Item>

        <Form.Item
          name="mainFunction"
          rules={[
            {
              required: true,
              message: 'Por favor insira a função principal!',
            },
          ]}
        >
          <TextArea placeholder="Função Principal" onChange={(e) => setMainFunction(e.target.value)} value={mainFunction} />
        </Form.Item>

        <Form.Item
          name="origin"
          rules={[
            {
              required: true,
              message: 'Por favor insira a origem!',
            },
          ]}
        >
          <Input placeholder="Origem" onChange={(e) => setOrigin(e.target.value)} value={origin} />
        </Form.Item>

        <Form.Item
          name="category"
          rules={[
            {
              required: true,
              message: 'Por favor selecione uma categoria!',
            },
          ]}
        >
          <Select placeholder="Categoria" onChange={(value) => setSelectedValue(value)} value={selectedValue}>
            <Option value="Alimentícios">Alimentícios</Option>
            <Option value="Corporais">Corporais</Option>
            <Option value="Saneantes">Saneantes</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Cadastrar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
