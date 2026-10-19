import type { ResultadoPaginado, PaginacionParams } from "../../../application/src/shared/pagination.js";

export interface PrismaModelDelegate {
    count: (args: any) => Promise<number>;
    findMany: (args: any) => Promise<any[]>;
    findUnique: (args: any) => Promise<any | null>;
    findFirst: (args: any) => Promise<any | null>;
    create: (args: any) => Promise<any>;
    update: (args: any) => Promise<any>;
    delete: (args: any) => Promise<any>;
}

// Firma de una función constructora de filtros
export type FiltrosBuilder<TFiltros> = (filtros: TFiltros) => Record<string, any>;

export abstract class BaseRepository<TDominio, TPrisma, TFiltros = any> {

    // Cada hijo DEBE definir su modelo de Prisma y su Mapper
    protected abstract get model(): PrismaModelDelegate;
    protected abstract toDomain(prismaItem: TPrisma): TDominio;

    // cada hijo puede definir cómo incluir relaciones
    protected get include(): any { return undefined; }

    // Método base de paginación
    async paginar(
        filtros: TFiltros,
        paginacion: PaginacionParams,
        buildWhere: FiltrosBuilder<TFiltros>,
        orderBy?: any
    ): Promise<ResultadoPaginado<TDominio>> {
        const { page, limit } = paginacion;
        const skip = (page - 1) * limit;
        const where = buildWhere(filtros);

        const [total, dataPrisma] = await Promise.all([
            this.model.count({ where }),
            this.model.findMany({
                where,
                skip,
                take: paginacion.limit,
                orderBy,
                include: this.include,
            }),
        ]);

        return {
            data: dataPrisma.map((item) => this.toDomain(item)),
            meta: {
                total,
                page: paginacion.page,
                limit: paginacion.limit,
                totalPages: Math.ceil(total / paginacion.limit),
            },
        };
    }

    // Método genérico para obtener por ID
    async porId(id: number): Promise<TDominio | null> {
        const item = await this.model.findFirst({
            where: { id },
            include: this.include
        });
        return item ? this.toDomain(item) : null;
    }
}