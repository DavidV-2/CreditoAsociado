import { type NextFunction, type Request, type Response } from "express";
import { CrearClienteUseCase, type CrearClienteDto } from "../../../../application/src/use-cases/persona/cliente.useCase.js";


export class ClienteController {
    constructor(private readonly crearClienteUseCase: CrearClienteUseCase) {}

    crear = async (req: Request<{}, {}, CrearClienteDto>, res: Response, next: NextFunction): Promise<void> => {
        try {
            const cliente = await this.crearClienteUseCase.execute(req.body);
            res.status(200).json({ success: true, ...cliente });
        } catch (error) {
            next(error)
        }
    }
}