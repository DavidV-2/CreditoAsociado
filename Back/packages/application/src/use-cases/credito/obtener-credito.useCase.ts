import { error } from "console";
import type { CreditoAsociado } from "../../../../domain/src/entities/credito-asociado.js";
import type { ICreditoAsociadoRepository } from "../../../../domain/src/repositories/credito/Icredito.repository.js";

export class ObtenerCreditoUseCase{
    constructor(private readonly repo: ICreditoAsociadoRepository){}

    async execute(id: number): Promise<CreditoAsociado>{
        const credito = await this.repo.obtenerPorId(id);
        if(!credito) throw new Error('Credito no encontrado');
        return credito;
    }
}