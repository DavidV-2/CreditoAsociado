import type { EstadoCredito } from "./credito/estado-credito.js";
import type { MetodoPago } from "./credito/metodo-pago.js";
import type { TipoCredito } from "./credito/tipo-credito.js";
import type { Cliente } from "./persona/cliente.js";

/**
 * Encapsula la información financiera del crédito.
 */

export class DetalleFinanciero {
    constructor(
        public readonly valorSolicitado: number,
        public readonly tasaInteres: number,
        public readonly numeroCuotas: number
    ) {}
}

/**
 * Controla las fechas clave y el histórico temporal del crédito.
 */

export class CicloVidaCredito {
    constructor(
        public readonly fechaSolicitud: Date,
        public readonly Actualizacion: Date,
    ) {}
}

/**
 * Entidad principal que orquesta el Crédito Asociado.
 */

export class CreditoAsociado {
    constructor(
        public readonly id: number,
        public readonly numeroCredito: string,
        public readonly identificacionAsociado: string,
        public readonly nombreAsociado: string,
        public readonly idCliente: number,
        public readonly cliente: Cliente | null,
        public readonly idTipoCredito: number,   
        public readonly tipoCredito: any | null,
        public readonly detalleFinanciero: DetalleFinanciero,
        public readonly idFormaPago: number,    
        public readonly formaPago: any | null,
        public readonly idEstadoCredito: number,
        public readonly estado: any | null,
        public readonly cicloVida: CicloVidaCredito,
        public readonly createdBy: string,
        public readonly historial: any [] = []
    ) {}
}