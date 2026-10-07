import express from "express";
import bcrypt from "bcryptjs";
import { findUserByLogin } from "../utils/userStore.js";

const router = express.Router();

router.post("/login", async (req, res) => {
    const { login, password } = req.body ?? {};

    if (typeof login !== "string" || typeof password !== "string") {
        return res.status(400).json({ok: false, error: "invalid request data"});
    }

    const user = await findUserByLogin(login);
    if (!user) {
        return res.status(401).json({ok: false, error: "invalid password or username"});
    }
    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
        return res.status(401).json({ok: false, error: "invalid password or username"});
    }

    return res.status(200).json({ok: true, userId: user.id, login: user.login});
});

router.post("/email", (req, res) => {

})

export default router;