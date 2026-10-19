import type { CreditoAsociado } from "../credito-asociado.js";

export class TipoCredito{
    constructor(
        public readonly id: number,
        public descripcion: string,
        public activo: boolean,

        public creditos: CreditoAsociado[] = []
    ){}
}