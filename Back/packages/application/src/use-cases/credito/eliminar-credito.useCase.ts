import type { ICreditoAsociadoRepository } from "../../../../domain/src/repositories/credito/Icredito.repository.js";

export class EliminarCreditoUseCase {
    constructor(private readonly repo: ICreditoAsociadoRepository) {}

    async execute(id: number): Promise<void> {
        const existe = await this.repo.obtenerPorId(id);
        if (!existe) throw new Error("Crédito no encontrado");

        return await this.repo.eliminarCredito(id);
    }
}