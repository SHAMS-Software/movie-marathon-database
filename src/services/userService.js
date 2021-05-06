const users = [
    {
        username: "Admin",
        password: "Password",
        email: "admin@mmdb.com",
        admin: 1
    },
    {
        username: "Jared6060",
        password: "1234",
        email: "jaredshapiro321@gmail.com",
        admin: 1
    },
    {
        username: "Doh",
        password: "8675309",
        email: "masondoh@gmail.com",
        admin: 0
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

export function addUser(username, password, email, admin) {
    let userInDb = users.find((u) => u.email === email) || {};
    userInDb.username = username;
    userInDb.password = password;
    userInDb.email = email;
    userInDb.admin = admin;

    users.push(userInDb);

    return userInDb;
}