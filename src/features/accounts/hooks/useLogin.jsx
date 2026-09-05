import { useState, useEffect } from "react";
import { schemaLogin } from "../../../../shared/features/accounts/config/schemaLogin";
import { useFeedback } from "../../../hooks/useFeedback";
import * as accountService from '../services/accountService';
import { translateError } from "../../../utils/translateError";
import { useNavigate } from "react-router-dom";

export function useLogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { feedback, setFeedback } = useFeedback();

  const navigate = useNavigate();

  async function login() {

    console.log('Opa, chegou na função login do hook');

    const dataAccount = { email, password };

    //Verificar zod

    try {

      //chamada pro service e tratamento de informações e dados (loading e etc)...

      const validationSchema = schemaLogin.safeParse(dataAccount);

      if (!validationSchema.success) {
        const errorCode = validationSchema.error.issues[0].message
        throw new Error(errorCode);
      }

      const response = await accountService.login(dataAccount);

      setFeedback({ info: 'success', message: 'Autenticação feita com sucesso!' });

      navigate('/dashboard', { replace: true });

    } catch (error) {

      console.log('ERRO VINDO NO HOOK CATCH: ', error.message)
      setFeedback({ info: 'error', message: translateError(error.message) });

    }

  }

  return { email, password, setEmail, setPassword, login, feedback, setFeedback };
}
