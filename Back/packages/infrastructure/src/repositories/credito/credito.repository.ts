import type { FiltrosCredito, PaginacionParams, ResultadoPaginado } from "../../../../application/src/shared/pagination.js";
import type { CreditoAsociado } from "../../../../domain/src/entities/credito-asociado.js";
import type { ICreditoAsociadoRepository } from "../../../../domain/src/repositories/credito/Icredito.repository.js";
import type { Prisma, PrismaClient, CreditoAsociado as PrismaCreditoAsociado } from "../../generated/prisma/index.js";
import { CreditoMapper } from "../../mapers/credito.mapper.js";
import { BaseRepository, type PrismaModelDelegate } from "../base.repository.js";
import { AppError } from "../../../../application/src/shared/app.error.js";
import type { ActualizarCreditoDto } from "../../../../application/src/use-cases/credito/actualizar-credito.useCase.js";

export class CreditoAsociadoRepository
    extends BaseRepository<CreditoAsociado, PrismaCreditoAsociado, FiltrosCredito>
    implements ICreditoAsociadoRepository {

    constructor(private readonly prisma: PrismaClient) {
        super();
    }

    protected get model(): PrismaModelDelegate {
        return this.prisma.creditoAsociado;
    }

    protected toDomain(prismaItem: PrismaCreditoAsociado): CreditoAsociado {
        return CreditoMapper.toDomain(prismaItem);
    }

    protected get include(): any {
        return { Cliente: true, Estado: true };
    }

    private buildWhere(filtros: FiltrosCredito): Prisma.CreditoAsociadoWhereInput {
        const where: Prisma.CreditoAsociadoWhereInput = {};

        if (filtros.estado) {
            where.Estado = { codigo: filtros.estado };
        }
        if (filtros.identificacionAsociado) {
            where.identificacionAsociado = filtros.identificacionAsociado;
        }
        if (filtros.busqueda) {
            where.OR = [
                { nombreAsociado: { contains: filtros.busqueda } },
                { numeroCredito: { contains: filtros.busqueda } },
            ];
        }

        return where;
    }

    async obtenerSiguienteNumeroCredito(): Promise<string> {
        const resultado: any[] = await this.prisma.$queryRaw`
            SELECT NEXT VALUE FOR seq_numero_credito AS valor
        `;
        const valor = resultado[0].valor;
        return `CRE-${Number(valor).toString().padStart(6, '0')}`;
    }

    async obtenerPaginados(filtros: FiltrosCredito, paginacion: PaginacionParams): Promise<ResultadoPaginado<CreditoAsociado>> {
        const orderBy = filtros.ordenarPor
            ? { [filtros.ordenarPor]: filtros.orden ?? 'desc' }
            : { fechaSolicitud: 'desc' };

        return this.paginar(filtros, paginacion, (f) => this.buildWhere(f), orderBy);
    }

    async obtenerPorId(id: number): Promise<CreditoAsociado | null> {
        const credito = await this.prisma.creditoAsociado.findFirst({
            where: { id },
            include: {
                Cliente: true,
                Estado: true,
                TipoCredito: true,
                FormaPago: true,
                historial: true
            }
        });

        if (!credito) return null;
        return CreditoMapper.toDomain(credito);
    }

    async crearCredito(creditoAsociado: CreditoAsociado): Promise<CreditoAsociado> {
        const data = CreditoMapper.toPersistence(creditoAsociado);
        const creado = await this.model.create({ data, include: this.include });
        return this.toDomain(creado);
    }

    async consultarCredito(): Promise<CreditoAsociado | null> {
        const items = await this.model.findMany({ take: 1, include: this.include });
        return items.length > 0 ? this.toDomain(items[0]) : null;
    }

    async consultarCreditoNumero(numeroCredito: string): Promise<CreditoAsociado> {
        const credito = await this.prisma.creditoAsociado.findUnique({
            where: { numeroCredito },
            include: this.include,
        });
        if (!credito) throw new Error(`Crédito ${numeroCredito} no encontrado`);
        return this.toDomain(credito);
    }

    async actualizarInformacion(id: number, datos: any): Promise<CreditoAsociado> {
        const actualizado = await this.model.update({
            where: { id },
            data: datos as Prisma.CreditoAsociadoUncheckedUpdateInput,
            include: this.include,
        });
        return this.toDomain(actualizado);
    }

    async eliminarCredito(id: number): Promise<void> {
        await this.model.update({
            where: { id },
            data: { activo: false },
        });
    }

    async cambiarEstado(
        id: number,
        nuevoEstadoCodigo: string,
        usuario: string,
        observacion?: string
    ): Promise<CreditoAsociado> {

        const creditoActual = await this.prisma.creditoAsociado.findUnique({
            where: { id },
            include: { Estado: true }
        });

        if (!creditoActual) {
            throw new AppError('CREDITO_NOT_FOUND', `El crédito ${id} no existe`, 404);
        }

        const estadoDestino = await this.prisma.estadoCredito.findUnique({
            where: { codigo: nuevoEstadoCodigo }
        });

        if (!estadoDestino) {
            throw new AppError(
                'ESTADO_INVALIDO',
                `El estado '${nuevoEstadoCodigo}' no existe en el catálogo`,
                400
            );
        }

        const [creditoActualizado] = await this.prisma.$transaction([
            this.prisma.creditoAsociado.update({
                where: { id },
                data: {
                    idEstadoCredito: estadoDestino.id,
                    updatedBy: usuario,
                },
                include: { Cliente: true, Estado: true }
            }),
            this.prisma.historialCredito.create({
                data: {
                    idCredito: id,
                    tipoCambio: 'ESTADO',
                    idEstadoAnterior: creditoActual.idEstadoCredito,
                    idEstadoNuevo: estadoDestino.id,
                    estadoAnterior: creditoActual.Estado?.codigo ?? null,
                    estadoNuevo: estadoDestino.codigo,
                    usuario: usuario,
                    observacion: observacion ?? `Cambio de estado vía API`,
                }
            })
        ]);

        return CreditoMapper.toDomain(creditoActualizado);
    }
}