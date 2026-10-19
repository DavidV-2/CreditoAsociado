import { Cliente } from '../../../domain/src/entities/persona/cliente.js';
import type { Cliente as PrismaCliente } from '../generated/prisma/index.js';

export class ClienteMapper {

    static toDomain(prismaCliente: PrismaCliente): Cliente {
        return new Cliente(
            prismaCliente.id,
            prismaCliente.documento,
            prismaCliente.nombres,
            prismaCliente.apellidos,
            prismaCliente.idTipoDocumento,
            null,
            prismaCliente.idTipoCliente,
            null
        );
    }

    static toPrisma(cliente: Cliente) {
        return {
            documento: cliente.documento,
            nombres: cliente.nombres,
            apellidos: cliente.apellidos,
            idTipoDocumento: cliente.idTipoDocumento,
            idTipoCliente: cliente.idTipoCliente
        };
    }
}