import * as authService from '../services/auth.service.js';

export async function login(req, res) {

    //Ele só decide quem vai ser chamado dos services e extrai os dados da req que vêm por parâmetros
    const dataAccount = { email: req.body.email, password: req.body.password };

    try {

        await authService.login(dataAccount);

        //Apenas para testes no Insomnia, não continuará com resposta, o correto é código 204 e .send()
        res.status(200).json({ message: 'Autenticação bem-sucedida!' });

    } catch (error) {

        res.status(401).json({ code: error.message });

    }




}