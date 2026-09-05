import { getUserByEmail } from "../repositories/auth.repository.js";

export async function login({ email, password }) {

    //O service simplesmente lida com regras do sistema e verificação de fato, mas sem chamada direta pro banco de dados.

    const user = await getUserByEmail(email);

    if (!user || !(user.password === password)) throw new Error('INVALID_CREDENTIALS');

}