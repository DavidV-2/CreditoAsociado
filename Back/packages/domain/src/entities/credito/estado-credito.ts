import type { CreditoAsociado } from "../credito-asociado.js";

export class EstadoCredito {
    constructor(
        public readonly id: number,
        public codigo : string,
        public descripcion: string,

        public creditos: CreditoAsociado[] = []
    ){}
}