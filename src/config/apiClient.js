import axios from "axios";

export const apiClient = axios.create(
    {
        baseURL: 'http://localhost:3001',
        withCredentials: true
    }
)

apiClient.interceptors.response.use(

    //Caso de sucesso -> 1 posicao
    (response) => response,
    //Caso de erro -> 2 posicao
    (error) => {

        //Aqui, precisamos verificar: foi erro de rede? Foi erro de servidor? Então pode mandar o código

        if (!error.response) {
            return Promise.reject(new Error('NETWORK_ERROR'));
        }

        const code = error.response.data?.code ?? 'SERVER_ERROR';
        return Promise.reject(new Error(code));

    }

)