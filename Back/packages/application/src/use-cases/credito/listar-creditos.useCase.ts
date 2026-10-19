
import type { CreditoAsociado } from "../../../../domain/src/entities/credito-asociado.js";
import type { ICreditoAsociadoRepository } from "../../../../domain/src/repositories/credito/Icredito.repository.js";
import type { FiltrosCredito, PaginacionParams, ResultadoPaginado } from "../../shared/pagination.js";

export class ListarCreditosUseCase {
    constructor(private readonly creditoAsociadoRepository: ICreditoAsociadoRepository) {}

    async execute(filtros: FiltrosCredito, paginacion: PaginacionParams): Promise<ResultadoPaginado<CreditoAsociado>> {

        const page = Math.max(1, paginacion.page || 1);
        const limit = Math.max(1, Math.min(100, paginacion.limit || 10)); 

        return await this.creditoAsociadoRepository.obtenerPaginados(filtros, { page, limit });
    }
}