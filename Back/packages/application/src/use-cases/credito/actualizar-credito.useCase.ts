import type { CreditoAsociado } from "../../../../domain/src/entities/credito-asociado.js";
import type { ICreditoAsociadoRepository } from "../../../../domain/src/repositories/credito/Icredito.repository.js";
import { prisma } from "../../../../infrastructure/src/lib/prisma.js";
import { ValidationError } from "../../shared/app.error.js";

export interface ActualizarCreditoDto {
    nombreAsociado?: string;
    valorSolicitado?: number;
    tasaInteres?: number;
    numeroCuotas?: number;
    formaPago?: string;
    estado?: string;
    tipoCredito?: string;
}

export class ActualizarCreditoUseCase{
    constructor(private readonly repo: ICreditoAsociadoRepository){}

    async execute(id: number, datos: ActualizarCreditoDto) : Promise<CreditoAsociado>{
        const existe = await this.repo.obtenerPorId(id);

        if(!existe) throw new Error('Credito no encontrado');

        const datosParaActualizar: any = {};

        if (datos.nombreAsociado) datosParaActualizar.nombreAsociado = datos.nombreAsociado;
        if (datos.valorSolicitado) datosParaActualizar.valorSolicitado = datos.valorSolicitado;
        if (datos.tasaInteres) datosParaActualizar.tasaInteres = datos.tasaInteres;
        if (datos.numeroCuotas) datosParaActualizar.numeroCuotas = datos.numeroCuotas;

        if (datos.formaPago) {
            const fpDb = await prisma.metodoPago.findFirst({ where: { codigo: datos.formaPago } });
            if (!fpDb) throw new ValidationError(`La forma de pago '${datos.formaPago}' no existe`);
            datosParaActualizar.idFormaPago = fpDb.id;
        }

        if (datos.estado) {
            const estDb = await prisma.estadoCredito.findFirst({ where: { codigo: datos.estado } });
            if (!estDb) throw new ValidationError(`El estado '${datos.estado}' no existe`);
            datosParaActualizar.idEstadoCredito = estDb.id;
        }

        return await this.repo.actualizarInformacion(id, datosParaActualizar);
    }
}