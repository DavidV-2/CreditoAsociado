import type { Request, Response } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "super-secreto-para-prueba";

export class AuthController {
    login = async (req: Request, res: Response): Promise<void> => {
        const { username, password } = req.body;


        if (username !== "admin" || password !== "admin123") {
            res.status(401).json({ success: false, error: { code: "INVALID_CREDENTIALS", message: "Credenciales inválidas" } });
            return;
        }

        // Generar token
        const token = jwt.sign({ sub: "admin", role: "ADMIN" }, JWT_SECRET, { expiresIn: "8h" });

        res.status(200).json({ success: true, token });
    }
}