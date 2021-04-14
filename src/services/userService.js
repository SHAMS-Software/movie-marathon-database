const users = [
    {
        id: "1234",
        username: "Jared6060",
        password: "1234",
        email: "jaredshapiro321@gmail.com"
    },
    {
        id: "0001",
        username: "Admin",
        password: "Password",
        email: "admin@mmdb.com"
    }
]

export function getUsers() {
    return users;
}

export function getUserByUsername(username) {
    return users.find((u) => u.username === username);
}

export function getUserByEmail(email) {
    return users.find((u) => u.email === email);
}