import React, { memo, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { User, AtSign, Lock } from 'react-feather';
import * as Yup from 'yup';

import { CustomForm } from './styles';
import { IUser } from '../../../models/user.model';
import { Button } from '../../../components/Button';
import Input from '../../../components/Input';

const schema = Yup.object().shape({
  firstName: Yup.string().required('O campo nome é obrigatório'),
  lastName: Yup.string().required('O campo sobrenome é obrigatório'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('O campo email é obrigatório'),
  password: Yup.string().required('O campo senha é obrigatório'),
});

function Form({ onSubmitted }) {
  const formRef = useRef<FormHandles>();

  const handleSubmit = async (data: IUser) => {
    formRef.current?.setErrors({});
    try {
      await schema.validate(data, {
        abortEarly: false,
      });
      onSubmitted(data);
    } catch (error) {
      console.log(error);
      const validationErrors: Record<string, string> = {};
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((error) => {
          validationErrors[error.path!] = error.message;
        });
        formRef.current?.setErrors(validationErrors);
      }
    }
  };

  return (
    <CustomForm ref={formRef} onSubmit={handleSubmit}>
      <Input
        name="firstName"
        label="Nome"
        icon={<User size={15} color="black" />}
      />
      <Input
        name="lastName"
        label="Sobrenome"
        icon={<User size={15} color="black" />}
      />
      <Input
        type="email"
        name="email"
        label="Email"
        icon={<AtSign size={15} color="black" />}
      />
      <Input
        type="password"
        name="password"
        label="Senha"
        icon={<Lock size={15} color="black" />}
      />
      <p style={{ marginBottom: '1rem' }}>
        Ao cadastrar, você concorda com os
        <a href="https://maisretorno.com/portal/politica-de-privacidade">
          <strong> Termos de Serviço e Política de Privacidade </strong>
        </a>
        da Mais Retorno
      </p>
      <Button
        title="Criar conta"
        onClick={() => formRef.current?.submitForm()}
      />
    </CustomForm>
  );
}

export default memo(Form);
