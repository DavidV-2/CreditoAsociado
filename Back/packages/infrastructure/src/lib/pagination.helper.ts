import type { ResultadoPaginado, PaginacionParams } from "../../../application/src/shared/pagination.js";

interface PrismaModelDelegate {
    count: (args: any) => Promise<number>;
    findMany: (args: any) => Promise<any[]>;
}

interface OpcionesPaginacion<TFiltros> {
    modelo: PrismaModelDelegate; 
    filtros: TFiltros;           
    paginacion: PaginacionParams;
    orderBy?: any;              
    include?: any;                
    mapeador: (item: any) => any; 
}

export async function paginarPrisma<TDominio, TFiltros = any>({
    modelo,
    filtros,
    paginacion,
    orderBy,
    include,
    mapeador,
}: OpcionesPaginacion<TFiltros>): Promise<ResultadoPaginado<TDominio>> {
    const { page, limit } = paginacion;
    const skip = (page - 1) * limit;


    const [total, dataPrisma] = await Promise.all([
        modelo.count({ where: filtros }),
        modelo.findMany({
            where: filtros,
            orderBy,
            skip,
            take: limit,
            include,
        }),
    ]);

    const data = dataPrisma.map(mapeador);

    return {
        data,
        meta: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        },
    };
}