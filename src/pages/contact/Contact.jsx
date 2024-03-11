import React from 'react';
import { PageHeader, Typography } from 'antd';
import GlobalLayout from '../../layouts/GlobalLayout';

const { Paragraph } = Typography;

const ContactPage = () => {
  return (
    <GlobalLayout>

    <div className="mx-auto max-w-lg p-6">
      <h1>Entre em contato conosco</h1>
      <Paragraph>
        Para entrar em contato conosco, envie um email para{' '}
        <a href="mailto:mateus.sival@example.com">mateus.sival@example.com</a>.
      </Paragraph>
    </div>
    </GlobalLayout>
  );
};

export default ContactPage;
