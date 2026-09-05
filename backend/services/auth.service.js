import { getUserByEmail } from "../repositories/auth.repository.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function login({ email, password }) {

    //O service simplesmente lida com regras do sistema e verificação de fato, mas sem chamada direta pro banco de dados.

    const user = await getUserByEmail(email);

    if (!user) throw new Error('INVALID_CREDENTIALS');

    //Depois disso, agora nós verificamos se a senha dada bate com o hash do banco (que por enquanto é fake)

    const hashValidation = await bcrypt.compare(password, user.password);

    if (!hashValidation) throw new Error('INVALID_CREDENTIALS');

    const token = jwt.sign(
        {
            id: user.id,
            type: user.type
        },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    )

    return token;

}