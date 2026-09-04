const BASE_URL = 'localhost://localhost:3001/accounts';

export async function login(dataAccount) {

    //Processo de verificação de login, que na real é só chamar por fetch a api do backend.

    // No meu estudo, foi passada que a convenção de uso de "responde" ao invés de res ajuda a não confundir aonde estou trabalhando (backend ou frontend), já que há troca constante de ambiente.
    const response = fetch(`${BASE_URL}`);
    
}