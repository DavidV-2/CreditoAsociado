import type { CreditoAsociado } from "../credito-asociado.js";
import type { TipoCliente } from "./tipo-cliente.js";
import type { TipoDocumento } from "./tipo-documento.js";

export class Cliente {
    constructor(
        public readonly id: number,
        public documento: string,
        public nombres: string,
        public apellidos: string,

        public idTipoDocumento: number,
        public tipoDocumento: TipoDocumento | null,

        public idTipoCliente: number,
        public tipoCliente: TipoCliente | null,

    ) { }
}