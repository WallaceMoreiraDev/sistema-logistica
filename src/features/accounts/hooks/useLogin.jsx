import { useState, useEffect } from "react";
import { schemaLogin } from "../config/schemaLogin";
import { useFeedback } from "../../../hooks/useFeedback";
import { login } from "../services/accountService";

export function useLogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { feedback, setFeedback } = useFeedback();

  async function login() {

    console.log('Opa, chegou na função login do hook');

    const dataAccount = { email, password };

    //Verificar zod

    const validationSchema = schemaLogin.safeParse(dataAccount);

    if (!validationSchema.success) {

      return setFeedback({ info: 'error', message: validationSchema.error.issues[0].message });

    }

    try {

      //chamada pro service e tratamento de informações e dados (loading e etc)...

      const res = await login();


    } catch (error) {

    }

  }

  return { email, password, setEmail, setPassword, login };
}
