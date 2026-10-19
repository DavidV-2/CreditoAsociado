import type { Cliente } from "../../entities/persona/cliente.js";

export interface IClienteRepository {

    obtenerClientePorId(id: number): Promise<Cliente | null>;
    guardarCliente(cliente: Cliente): Promise<Cliente>;
}