const users = [
    {
        username: "Admin",
        password: "Password",
        email: "admin@mmdb.com"
    },
    {
        username: "Jared6060",
        password: "1234",
        email: "jaredshapiro321@gmail.com"
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

export function addUser(username, password, email) {
    let userInDb = users.find((u) => u.email === email) || {};
    userInDb.username = username;
    userInDb.password = password;
    userInDb.email = email;

    users.push(userInDb);

    return userInDb;
}