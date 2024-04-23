import React from 'react';
import { MailOutlined } from '@ant-design/icons';
import GlobalLayout from '../../layouts/GlobalLayout';

const ContactPage = () => {
  return (
    <GlobalLayout>
      <div className="mx-auto max-w-lg p-6 ">
        <h1 className='text-xl dark:text-white'>Entre em contato conosco</h1>
        <p className='dark:text-white'>
          Não encontrou algum ingrediente? Gostaria de sugerir uma atualização? Quer estabelecer uma parceria?
        </p>
        <p className='dark:text-white'>
          Entre em contato e vamos conversar!
        </p>
        <p className='dark:text-white'>
          <MailOutlined /> <strong>E-mail:</strong> <a href="mailto:emanoeloliveira@ifba.edu.br">emanoeloliveira@ifba.edu.br</a><br />
          <MailOutlined /> <strong>E-mail:</strong> <a href="mailto:rabelo@ifba.edu.br">rabelo@ifba.edu.br</a>
          <MailOutlined /> <strong>E-mail:</strong> <a href="mailto:rabelo@ifba.edu.br">mateuspele2015@gmail.com</a>

        </p>
      </div>
    </GlobalLayout>
  );
};

export default ContactPage;
