import { create } from "domain";
import { CicloVidaCredito, CreditoAsociado, DetalleFinanciero } from "../../../../domain/src/entities/credito-asociado.js";
import type { ICreditoAsociadoRepository } from "../../../../domain/src/repositories/credito/Icredito.repository.js";
import { prisma } from "../../../../infrastructure/src/lib/prisma.js";
import type { CreditoCreationService } from "../../services/credito-creation.service.js";
import { ValidationError } from "../../shared/app.error.js";

export interface CrearCreditoAsociadoDto {
    identificacionAsociado: string;
    nombreAsociado: string;
    tipoCredito: string;
    valorSolicitado: number;
    tasaInteres: number;
    numeroCuotas: number;
    formaPago: string;
    estado: string;
    createdBy: string
    fechaSolicitud: Date;
    fechaActualizacion: Date;

}


export class CrearCreditoUseCase {
    constructor(
        private readonly creditoCreationService: CreditoCreationService,
        private readonly creditoRepo: ICreditoAsociadoRepository
    ) { }

    async execute(credit: CrearCreditoAsociadoDto): Promise<CreditoAsociado> {


        if (credit.valorSolicitado <= 0) {
            throw new ValidationError("El valor solicitado debe ser mayor a cero");
        }
        if (credit.tasaInteres < 0) {
            throw new ValidationError("La tasa de interés no puede ser negativa");
        }
        if (credit.numeroCuotas <= 0) {
            throw new ValidationError("El número de cuotas debe ser mayor a cero");
        }

        const clienteDb = await prisma.cliente.findFirst({
            where: { documento: credit.identificacionAsociado }
        });

        if (!clienteDb) {
            throw new ValidationError("El cliente con ese documento no existe. Créelo primero en /api/clientes");
        }

        const tipoCreditoDb = await prisma.tipoCredito.findFirst({
            where: { codigo: credit.tipoCredito }
        });
        const formaPagoDb = await prisma.metodoPago.findFirst({
            where: { codigo: credit.formaPago }
        });
        const estadoDb = await prisma.estadoCredito.findFirst({
            where: { codigo: credit.estado }
        });

        if (!tipoCreditoDb || !formaPagoDb || !estadoDb) {
            throw new ValidationError("Alguno de los códigos enviados (tipoCrédito, formaPago o estado) no existe en la base de datos");
        }

        const numeroCredito = await this.creditoRepo.obtenerSiguienteNumeroCredito();


        const detalleFinanciero = new DetalleFinanciero(credit.valorSolicitado, credit.tasaInteres, credit.numeroCuotas);

        const cicloVida = new CicloVidaCredito(
            credit.fechaSolicitud ?? new Date(),
            new Date(),
            
        );

        const nuevoCredito = new CreditoAsociado(
            0,
            numeroCredito,
            credit.identificacionAsociado,
            credit.nombreAsociado,
            clienteDb.id, null,
            tipoCreditoDb.id, null,
            detalleFinanciero,
            formaPagoDb.id, null,
            estadoDb.id, null,
            cicloVida,
            credit.createdBy

        );

        return this.creditoCreationService.crearCreditoConWebhook(nuevoCredito);
    }
}
