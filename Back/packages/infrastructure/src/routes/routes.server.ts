import { Router } from "express";
import { prisma } from "../lib/prisma.js";

// Routers
import { creditoRouter } from "./routes-controller/credito.-asociado.router.js";
import { clientRouter } from "./routes-controller/client.router.js";

// Repositorios
import { WebhookOutboxRepository } from "../repositories/webhook-outbox.repository.js";
import { ClienteRepository } from "../repositories/persona/cliente.repository.js";
import { CreditoAsociadoRepository } from "../repositories/credito/credito.repository.js";

import { PrismaUnitOfWork } from "../repositories/prisma-unit-of-work.js";
import {authMiddleware } from "../middlewares/auth.middleware.js"

// Servicios y Casos de uso - Cliente
import { CrearClienteUseCase } from "../../../application/src/use-cases/persona/cliente.useCase.js";

// Servicios y Casos de uso - Crédito
import { CreditoCreationService } from "../../../application/src/services/credito-creation.service.js";

import { ListarCreditosUseCase } from "../../../application/src/use-cases/credito/listar-creditos.useCase.js";
import { ObtenerCreditoUseCase } from "../../../application/src/use-cases/credito/obtener-credito.useCase.js";
import { ActualizarCreditoUseCase } from "../../../application/src/use-cases/credito/actualizar-credito.useCase.js";
import { CambiarEstadoUseCase } from "../../../application/src/use-cases/credito/cambiar-estado.useCase.js";
import { EliminarCreditoUseCase } from "../../../application/src/use-cases/credito/eliminar-credito.useCase.js";

// Controladores
import { ClienteController } from "../controllers/persona/cliente-controller.js";
import { CreditoAsociadoController } from "../controllers/credito/credito-asociado-controller.js";
import { CrearCreditoUseCase } from "../../../application/src/use-cases/credito/crear-credito.useCase.js";
import { AuthController } from "../controllers/auth/auth.controller.js"


// ==========================================
// CLIENTES
// ==========================================
const clienteRepository = new ClienteRepository(prisma);
const crearCliente = new CrearClienteUseCase(clienteRepository);
const clienteController = new ClienteController(crearCliente);
const clientRouterInstance = clientRouter(clienteController);

// ==========================================
// CRÉDITOS
// ==========================================
const creditoRepository = new CreditoAsociadoRepository(prisma);
const outboxRepository = new WebhookOutboxRepository(prisma);

// Instancia  Unit of Work
const unitOfWork = new PrismaUnitOfWork(prisma);

// Instancia Domain Service
const creditoCreationService = new CreditoCreationService(unitOfWork);

// Casos de Uso
const crearCreditoUC = new CrearCreditoUseCase(creditoCreationService, creditoRepository);
const listarCreditosUC = new ListarCreditosUseCase(creditoRepository);
const obtenerCreditoUC = new ObtenerCreditoUseCase(creditoRepository);
const actualizarCreditoUC = new ActualizarCreditoUseCase(creditoRepository);
const cambiarEstadoUC = new CambiarEstadoUseCase(creditoRepository);
const eliminarCreditoUC = new EliminarCreditoUseCase(creditoRepository);

// Controlador
const creditoController = new CreditoAsociadoController(
    crearCreditoUC,
    listarCreditosUC,
    obtenerCreditoUC,
    actualizarCreditoUC,
    cambiarEstadoUC,
    eliminarCreditoUC
);

// Router
const creditoRouterInstance = creditoRouter(creditoController);

// ==========================================
// MAIN ROUTER
// ==========================================
const mainRouter = Router();

mainRouter.post("/api/auth/login", (req, res) =>{
    new AuthController().login(req, res);
});

mainRouter.use("/api/creditos", authMiddleware, creditoRouterInstance); 
mainRouter.use("/api/clientes",  clientRouterInstance);  

export { mainRouter };