import React from 'react';
import { PageHeader, Typography } from 'antd';
import GlobalLayout from '../../layouts/GlobalLayout';

const { Paragraph } = Typography;

const ContactPage = () => {
  return (
    <GlobalLayout>

    <div className="mx-auto max-w-lg p-6">
      <h1 className='text-xl'>Entre em contato conosco</h1>
      <Paragraph>
        <span className='text-lg'>Para entrar em contato conosco, envie um email para {" "}</span>
        <a className='text-md' href="mailto:mateus.sival@example.com">mateus.sival@example.com</a>.
      </Paragraph>
    </div>
    </GlobalLayout>
  );
};

export default ContactPage;
