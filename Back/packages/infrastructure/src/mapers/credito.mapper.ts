import { CreditoAsociado, DetalleFinanciero, CicloVidaCredito } from "../../../domain/src/entities/credito-asociado.js";
import { ClienteMapper } from "./cliente.mapper.js";
import type { Prisma } from '../generated/prisma/index.js';
import { create } from "domain";

export class CreditoMapper {


    static toDomain(prismaCredito: any): CreditoAsociado {

        const detalleFinanciero = new DetalleFinanciero(
            prismaCredito.valorSolicitado.toNumber(),
            prismaCredito.tasaInteres.toNumber(),
            prismaCredito.numeroCuotas
        );

        const cicloVida = new CicloVidaCredito(
            prismaCredito.fechaSolicitud,
            prismaCredito.fechaAprobacion ?? null,

        );

        return new CreditoAsociado(
            prismaCredito.id,
            prismaCredito.numeroCredito,
            prismaCredito.identificacionAsociado,
            prismaCredito.nombreAsociado,

            prismaCredito.idCliente,
            prismaCredito.Cliente ? ClienteMapper.toDomain(prismaCredito.Cliente) : null,

            prismaCredito.idTipoCredito,
            null, // O mapear el tipo de crédito si lo incluyes en Prisma

            detalleFinanciero,

            prismaCredito.idFormaPago,
            null, // O mapear la forma de pago

            prismaCredito.idEstadoCredito,
            // Aquí mapeamos el estado real (el argumento 13)
            prismaCredito.Estado ? { id: prismaCredito.Estado.id, codigo: prismaCredito.Estado.codigo } : null,

            cicloVida,
            prismaCredito.createdBy ?? 'sistema',
            prismaCredito.historial ?? []
        );
    }

    static toPersistence(dominioCredito: CreditoAsociado): Prisma.CreditoAsociadoUncheckedCreateInput {
        return {
            numeroCredito: dominioCredito.numeroCredito,
            identificacionAsociado: dominioCredito.identificacionAsociado,
            nombreAsociado: dominioCredito.nombreAsociado,

            idCliente: dominioCredito.idCliente,
            idTipoCredito: dominioCredito.idTipoCredito,
            idFormaPago: dominioCredito.idFormaPago,
            idEstadoCredito: dominioCredito.idEstadoCredito,

            valorSolicitado: dominioCredito.detalleFinanciero.valorSolicitado,
            tasaInteres: dominioCredito.detalleFinanciero.tasaInteres,
            numeroCuotas: dominioCredito.detalleFinanciero.numeroCuotas,

            fechaSolicitud: dominioCredito.cicloVida.fechaSolicitud ?? new Date(),
            createdBy: dominioCredito.createdBy
        };
    }
}