import type { Cliente } from "./cliente.js";

export class TipoCliente {
    constructor(
        public readonly id: number,
        public idTipoCliente: string,
        public descripcion: string,
        public activo: boolean,
        public fechaRegistro: Date
    ) { }
}