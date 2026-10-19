import { Cliente } from "../../../../domain/src/entities/persona/cliente.js";
import type { IClienteRepository } from "../../../../domain/src/repositories/persona/Icliente.repository.js";

export interface CrearClienteDto{
    documento: string;
    nombres: string;
    apellidos: string;
    idTipoDocumento: number;
    idTipoCliente: number;
}

export class CrearClienteUseCase{
    constructor(private readonly clienteRepository: IClienteRepository){}

    async execute(data: CrearClienteDto) : Promise<Cliente>{
        
        const nuevoCliente = new Cliente(
            0,
            data.documento,
            data.nombres,
            data.apellidos,
            data.idTipoDocumento,
            null,
            data.idTipoCliente,
            null
        );

        return await this.clienteRepository.guardarCliente(nuevoCliente);
    }
}