import axios from "axios";
import { apiClient } from "../../../config/apiClient.js";

export async function login(dataAccount) {

    //Processo de verificação de login, que na real é só chamar por axios a api do backend.

    // No meu estudo, foi passada que a convenção de uso de "response" ao invés de res, pois ajuda a não confundir aonde estou trabalhando (backend ou frontend), já que há troca constante de ambiente.

    //Outro ponto crucial é o fato de que ao usar axios, me isento de ter que usar response.json para parsear, e também me isento de lidar com os erros aqui ou em outros services. Assim, o único caso possível se não ir pro catch do hook por exception propagation, é dar sucesso e eu retornar response.

    const { data } = await apiClient.post('/auth/login', { email: dataAccount.email, password: dataAccount.password });

    return data;

}