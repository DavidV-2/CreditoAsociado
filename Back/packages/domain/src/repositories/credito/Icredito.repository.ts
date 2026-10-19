import type { FiltrosCredito, PaginacionParams, ResultadoPaginado } from "../../../../application/src/shared/pagination.js";
import type { CreditoAsociado } from "../../entities/credito-asociado.js";

export interface ICreditoAsociadoRepository{

    crearCredito(creditoAsociado: CreditoAsociado): Promise<CreditoAsociado>;
    consultarCredito(): Promise<CreditoAsociado | null>;
    consultarCreditoNumero(numeroCredito: string): Promise<CreditoAsociado>;

    obtenerPorId(id: number) : Promise<CreditoAsociado | null>;
    actualizarInformacion(id: number, datos: any): Promise<CreditoAsociado>;
    eliminarCredito(id: number): Promise<void>;


    cambiarEstado(
        id: number, 
        nuevoEstado: string, 
        usuario: string, 
        observacion?: string
    ): Promise<CreditoAsociado>;

    // Metodo de Paginacion
    obtenerPaginados(
        filtros: FiltrosCredito,
        paginacion: PaginacionParams
    ) : Promise<ResultadoPaginado<CreditoAsociado>>;

    obtenerSiguienteNumeroCredito() : Promise<string>;
}
