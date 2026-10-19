import type { Cliente } from "./cliente.js";


export class TipoDocumento {
    constructor(
        public readonly id: number,
        public idTipoDocumento: string,
        public descripcion: string,
        public activo: boolean,
        public fechaRegistro: Date
    ) { }
}