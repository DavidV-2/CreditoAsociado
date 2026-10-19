export interface PaginacionParams{
    page: number,
    limit: number
}

export interface ResultadoPaginado<T>{
    data: T[];
    meta: {
        total: number,
        page: number,
        limit: number,
        totalPages: number;
    }
}

export interface FiltrosCredito {
    estado?: string  | undefined,
    identificacionAsociado?: string | undefined,
    busqueda?: string | undefined,
    ordenarPor?: string | undefined;
    orden?: 'asc' | 'desc' | undefined;
}
    