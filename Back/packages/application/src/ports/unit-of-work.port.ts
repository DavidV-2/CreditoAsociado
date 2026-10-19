import type { ICreditoAsociadoRepository } from "../../../domain/src/repositories/credito/Icredito.repository.js";
import type { IWebhookOutboxRepository } from "../../../domain/src/repositories/IWebhookOutbox.repository.js";


export interface ITransactionContext {
    creditoRepository: ICreditoAsociadoRepository;
    webhookOutboxRepository: IWebhookOutboxRepository;
}


export interface IUnitOfWork {
    execute<T>(
        work: (ctx: ITransactionContext) => Promise<T>
    ): Promise<T>;
}