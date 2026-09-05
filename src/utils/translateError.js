
const errorDictionary = {
    NETWORK_ERROR: 'Ocorreu um erro de conexão, verifique sua internet!',
    SERVER_ERROR: 'Ocorreu um erro inesperado no servidor',
    INVALID_CREDENTIALS: 'E-mail ou senha inválidos!',
    INVALID_FORMAT_EMAIL: "Formato de e-mail inválido! Digite corretamente!",
    INVALID_FORMAT_PASSWORD: "Formato de senha inválido! Digite corretamente!",
    MIN_PASSWORD_LENGTH: 'Caracteres de senha insuficientes! Digite corretamente!'
}

export function translateError(code) {

    const errorMessage = errorDictionary[code] || 'Ocorreu um erro inesperado!';

    return errorMessage;

}