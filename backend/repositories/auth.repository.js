

const fakeUsers = [
    {
        id: 'h3425hj4bjj2b5kh34534',
        email: 'wallace.msilva0805@gmail.com',
        password: '$2b$10$Q7N6oqGo8MC/xnVEAxR5cufoAJseQLEtX3Gu5JXl4clizAG8iXnn6',
        type: 'admin'
    },
    {
        id: 'j4b35hj24j34b4k26',
        email: 'joao.souza0805@gmail.com',
        password: 'joao36912',
        type: 'user'
    },
    {
        id: 'klj34j2klj34j26',
        email: 'maria.souza0805@gmail.com',
        password: 'maria36912',
        type: 'user'
    },
    {
        id: 'p45j2klj34j26',
        email: 'carlos.souza0805@gmail.com',
        password: 'carlos36912',
        type: 'user'
    },
    {
        id: 'r76j2klj34j26',
        email: 'fernanda.souza0805@gmail.com',
        password: 'fernanda36912',
        type: 'user'
    },
]

export async function getUserByEmail(email) {

    const user = fakeUsers.find(user => user.email === email);

    if (!user) return;

    return user;

}