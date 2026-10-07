import fs from "node:fs/promises";

const userFile = new URL("../data/users.json", import.meta.url);

async function readUsers() {
    const text = await fs.readFile(userFile, "utf-8");
    return JSON.parse(text);
}

async function writeUsers(users) {
    await fs.writeFile(userFile, JSON.stringify(users, null, 2), "utf-8");
}

async function findUserByLogin(login) {
    const users = await readUsers();
    return users.find((it) => it.login === login);
}

export { readUsers, writeUsers, findUserByLogin };