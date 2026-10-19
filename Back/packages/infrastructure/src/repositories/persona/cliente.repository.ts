import { BaseRepository, type PrismaModelDelegate } from "../base.repository.js";
import type { Cliente } from "../../../../domain/src/entities/persona/cliente.js";
import type { IClienteRepository } from "../../../../domain/src/repositories/persona/Icliente.repository.js";
import { ClienteMapper } from "../../mapers/cliente.mapper.js";
import type { PrismaClient, Cliente as PrismaCliente } from "../../generated/prisma/index.js";

export class ClienteRepository 
    extends BaseRepository<Cliente, PrismaCliente>
    implements IClienteRepository {

    constructor(private readonly prisma: PrismaClient) {
        super();
    }

    // modelo
    protected get model(): PrismaModelDelegate {
        return this.prisma.cliente;
    }

    // Mapper
    protected toDomain(prismaItem: PrismaCliente): Cliente {
        return ClienteMapper.toDomain(prismaItem);
    }


    async obtenerClientePorId(id: number): Promise<Cliente | null> {
        return this.porId(id);
    }

    async guardarCliente(cliente: Cliente): Promise<Cliente> {
        const dataParaPrisma = ClienteMapper.toPrisma(cliente);
        const clienteCreadoPrisma = await this.model.create({ data: dataParaPrisma });
        return this.toDomain(clienteCreadoPrisma);
    }
}