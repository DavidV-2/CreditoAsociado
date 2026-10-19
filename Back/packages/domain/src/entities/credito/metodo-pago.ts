import type { CreditoAsociado } from "../credito-asociado.js";


export class MetodoPago {
    constructor(
        public readonly id: number,
        public codigoPago: string,
        public descripcion: string,

        public creditos: CreditoAsociado[] = []
    ) { }
}