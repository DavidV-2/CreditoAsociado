import type { CrearWebhookPendienteData, IWebhookOutboxRepository } from "../../../domain/src/repositories/IWebhookOutbox.repository.js";
import type { PrismaClient } from "../generated/prisma/index.js";


export class WebhookOutboxRepository implements IWebhookOutboxRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async crearPendiente(data: CrearWebhookPendienteData): Promise<void> {
        await this.prisma.webhookOutbox.create({
            data: {
                ...data,
                estado: "PENDIENTE",
                proximoIntento: new Date(),
            },
        });
    }

    async obtenerPendientesParaEnvio(limit: number): Promise<any[]> {
        return this.prisma.webhookOutbox.findMany({
            where: {
                estado: "PENDIENTE",
                proximoIntento: { lte: new Date() },
                intentos: { lt: 5 },
            },
            orderBy: { fechaCreacion: "asc" },
            take: limit,
        });
    }

    async marcarComoEnviado(id: number): Promise<void> {
        await this.prisma.webhookOutbox.update({
            where: { id },
            data: {
                estado: "ENVIADO",
                fechaEnvio: new Date(),
                ultimoError: null,
            },
        });
    }

    async marcarComoFallido(id: number, error: string, proximoIntento: Date): Promise<void> {
        await this.prisma.webhookOutbox.update({
            where: { id },
            data: {
                estado: "PENDIENTE",
                intentos: { increment: 1 },
                ultimoError: error.slice(0, 500),
                proximoIntento,
            },
        });
    }
}