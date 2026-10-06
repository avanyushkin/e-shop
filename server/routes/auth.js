import express from "express";
import fs from "node:fs/promises";

const usersFile = new URL("../data/users.json", import.meta.url);

async function readUsers() {
    const text = await fs.readFile(usersFile, "utf-8");
    return JSON.parse(text);
}

const router = express.Router();

const mock_users = await readUsers();

router.post("/login", (req, res) => {
    const { username, password } = req.body ?? {};

    if (typeof username !== "string" || typeof password !== "string") {
        return res.status(400).json({ok: false, error: "invalid request data"});
    }

    const user = mock_users.find((it) => it.username === username && it.password === password);
    if (!user) {
        return res.status(401).json({ok: false, error: "invalid password or username"});
    }
    return res.status(200).json({ok: true, user: {username: user.username}});
});

export default router;