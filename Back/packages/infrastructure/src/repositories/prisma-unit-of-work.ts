import type { PrismaClient } from "../generated/prisma/index.js";
import type { IUnitOfWork, ITransactionContext, } from "../../../application/src/ports/unit-of-work.port.js";
import { CreditoAsociadoRepository } from "./credito/credito.repository.js";
import { WebhookOutboxRepository } from "./webhook-outbox.repository.js";


export class PrismaUnitOfWork implements IUnitOfWork {
    constructor(private readonly prisma: PrismaClient) {}

    async execute<T>(
        work: (ctx: ITransactionContext) => Promise<T>
    ): Promise<T> {
        return this.prisma.$transaction(async (tx) => {

            const creditoRepo = new CreditoAsociadoRepository(tx as unknown as PrismaClient);
            const outboxRepo = new WebhookOutboxRepository(tx as unknown as PrismaClient);

            return work({
                creditoRepository: creditoRepo,
                webhookOutboxRepository: outboxRepo,
            });
        });
    }
}