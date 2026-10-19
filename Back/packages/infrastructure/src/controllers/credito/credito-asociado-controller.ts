import { type NextFunction, type Request, type Response } from "express";
import type { CrearCreditoUseCase, CrearCreditoAsociadoDto } from "../../../../application/src/use-cases/credito/crear-credito.useCase.js";
import { ListarCreditosUseCase } from "../../../../application/src/use-cases/credito/listar-creditos.useCase.js";
import { ObtenerCreditoUseCase } from "../../../../application/src/use-cases/credito/obtener-credito.useCase.js";
import { ActualizarCreditoUseCase } from "../../../../application/src/use-cases/credito/actualizar-credito.useCase.js";
import { CambiarEstadoUseCase } from "../../../../application/src/use-cases/credito/cambiar-estado.useCase.js";
import { EliminarCreditoUseCase } from "../../../../application/src/use-cases/credito/eliminar-credito.useCase.js";
import { ValidationError } from "../../../../application/src/shared/app.error.js";

export class CreditoAsociadoController {
    constructor(
        private readonly crearCreditoUseCase: CrearCreditoUseCase,
        private readonly listarCreditosUseCase: ListarCreditosUseCase,
        private readonly obtenerCreditoUseCase: ObtenerCreditoUseCase,
        private readonly actualizarCreditoUseCase: ActualizarCreditoUseCase,
        private readonly cambiarEstadoUseCase: CambiarEstadoUseCase,
        private readonly eliminarCreditoUseCase: EliminarCreditoUseCase
    ) { }

    crear = async (req: Request<{}, {}, CrearCreditoAsociadoDto>, res: Response, next: NextFunction): Promise<void> => {
        try {
            const credito = await this.crearCreditoUseCase.execute(req.body);
            res.status(201).json(credito);

        } catch (error) {
            next(error)
        }

    }

    listar = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const page = parseInt(req.query.page as string, 10) || 1;
        const limit = parseInt(req.query.limit as string, 10) || 5;

        const filtros = {
            estado: req.query.estado as string | undefined,
            identificacionAsociado: req.query.identificacionAsociado as string | undefined,
            busqueda: req.query.busqueda as string | undefined,
            ordenarPor: req.query.ordenarPor as string | undefined,
            orden: (req.query.orden as 'asc' | 'desc') || 'desc'
        };

        const resultado = await this.listarCreditosUseCase.execute(filtros, { page, limit });
        
        res.status(200).json({ success: true, ...resultado });
    } catch (error) {
        next(error);
    }
};
    obtenerPorId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const id = parseInt(req.params.id as string, 10);
            const credito = await this.obtenerCreditoUseCase.execute(id);
            res.status(200).json({ success: true, data: credito });
        } catch (error) {
            next(error)
        }
    };

    actualizar = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const id = parseInt(req.params.id as string, 10);
            const credito = await this.actualizarCreditoUseCase.execute(id, req.body);
            res.status(200).json({ success: true, ...credito });
        } catch (error) {
            next(error)
        }
    };

    cambiarEstado = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const id = parseInt(req.params.id as string, 10);
            const { estado, observacion } = req.body;

            if (!estado) {
                throw new ValidationError('El campo "estado" es requerido en el body');
            }

            const usuario = (req as any).user?.email ?? 'sistema';

            const credito = await this.cambiarEstadoUseCase.execute(
                id,
                estado,
                usuario,
                observacion
            );
            
            res.status(200).json({ success: true, ...credito });
        } catch (error) {
            next(error)
        }
    };

    eliminar = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const id = parseInt(req.params.id as string, 10);
            await this.eliminarCreditoUseCase.execute(id);
            res.status(204).send();
        } catch (error) {
            next(error)
        }
    };
}
