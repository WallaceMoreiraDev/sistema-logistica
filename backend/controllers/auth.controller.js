import * as authService from '../services/auth.service.js';
import { schemaLogin } from '../../shared/features/accounts/config/schemaLogin.js';

export async function login(req, res) {

    //Ele só decide quem vai ser chamado dos services e extrai os dados da req que vêm por parâmetros
    const dataAccount = { email: req.body.email, password: req.body.password };

    const validationSchema = schemaLogin.safeParse(dataAccount);

    if (!validationSchema.success) res.status(400).json({ message: validationSchema.error.issues[0].message });

    try {

        const token = await authService.login(dataAccount);

        res.cookie('token_auth', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60,
            sameSite: 'lax'
        })

        //Apenas para testes no Insomnia, não continuará com resposta, o correto é código 204 e .send()
        res.status(200).json({ message: 'Autenticação bem-sucedida!' });

    } catch (error) {

        res.status(401).json({ code: error.message });

    }




}