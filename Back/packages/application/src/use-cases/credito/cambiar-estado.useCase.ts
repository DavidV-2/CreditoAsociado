import type { ICreditoAsociadoRepository } from "../../../../domain/src/repositories/credito/Icredito.repository.js";
import type { CreditoAsociado } from "../../../../domain/src/entities/credito-asociado.js";
import { CreditoNotFoundError, TransicionEstadoInvalidaError, ValidationError } from "../../shared/app.error.js";


const TRANSICIONES_VALIDAS: Record<string, string[]> = {
    'SOLICITADO':   ['EN_ESTUDIO', 'CANCELADO'],
    'EN_ESTUDIO':   ['APROBADO', 'RECHAZADO', 'CANCELADO'],
    'APROBADO':     ['DESEMBOLSADO', 'CANCELADO'],
    'RECHAZADO':    [],
    'DESEMBOLSADO': [],
    'CANCELADO':    [],
};

export class CambiarEstadoUseCase {
    constructor(private readonly repo: ICreditoAsociadoRepository) {}

    async execute(
        id: number, 
        nuevoEstado: string, 
        usuario: string = 'sistema',
        observacion?: string
    ): Promise<CreditoAsociado> {


        if (!nuevoEstado) {
            throw new ValidationError('El nuevo estado es requerido');
        }

        // Verificar existencia
        const credito = await this.repo.obtenerPorId(id);
        if (!credito) {
            throw new CreditoNotFoundError(id);
        }

        // Obtener código del estado actual
        const estadoActual = credito.estadoCredito?.descripcion ?? 'SOLICITADO';

        // Validar transición
        const transicionesPermitidas = TRANSICIONES_VALIDAS[estadoActual] ?? [];
        if (!transicionesPermitidas.includes(nuevoEstado)) {
            throw new TransicionEstadoInvalidaError(estadoActual, nuevoEstado);
        }

        return await this.repo.cambiarEstado(id, nuevoEstado, usuario, observacion);
    }
}