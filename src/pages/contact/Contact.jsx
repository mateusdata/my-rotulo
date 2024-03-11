import React from 'react';
import { Input, Button } from 'antd';

const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <Input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        Senha:
        <Input.Password value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <Button type="primary" htmlType="submit">
        Entrar
      </Button>
    </form>
  );
};

export default LoginForm;
