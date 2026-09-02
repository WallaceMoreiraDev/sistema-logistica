import { useState, useEffect } from "react";

export function useLogin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function login() {

        console.log('')

    }
    
  return { email, password, setemail, setPassword, login };
}
