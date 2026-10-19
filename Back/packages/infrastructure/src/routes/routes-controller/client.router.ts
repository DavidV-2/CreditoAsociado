import { Router } from "express";
import { ClienteController } from "../../controllers/persona/cliente-controller.js"

export const clientRouter = (clienteController: ClienteController) : Router => {
    const router = Router();

    router.post('/', clienteController.crear)

    return router;
}