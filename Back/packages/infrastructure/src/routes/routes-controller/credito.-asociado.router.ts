import { Router } from "express";
import { CreditoAsociadoController } from "../../controllers/credito/credito-asociado-controller.js";


export const creditoRouter = (controller : CreditoAsociadoController) : Router => {
    const router = Router();

    router.post('/', controller.crear);
    router.get('/', controller.listar);
    router.get('/:id', controller.obtenerPorId);
    router.put('/:id', controller.actualizar);
    router.patch('/:id/estado', controller.cambiarEstado);
    router.delete('/:id', controller.eliminar);
    return router;
    
}