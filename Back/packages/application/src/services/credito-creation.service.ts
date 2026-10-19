import { randomUUID } from "crypto";
import type { IUnitOfWork } from "../ports/unit-of-work.port.js";
import type { CreditoAsociado } from "../../../domain/src/entities/credito-asociado.js";

export class CreditoCreationService {
    constructor(private readonly unitOfWork: IUnitOfWork) {}


    async crearCreditoConWebhook(credito: CreditoAsociado): Promise<CreditoAsociado> {
        const eventId = randomUUID();

        return this.unitOfWork.execute(async (tx) => {

            //  Persistencia
            const creditoCreado = await tx.creditoRepository.crearCredito(credito);

            // payload
            const payloadWebhook = this.construirPayloadWebhook(creditoCreado, eventId);

            // traza
            await tx.webhookOutboxRepository.crearPendiente({
                eventId,
                eventType: "credito.creado",
                idCredito: creditoCreado.id,
                entidadId: 1,
                payload: JSON.stringify(payloadWebhook),
            });

            return creditoCreado;
        });
    }

    private construirPayloadWebhook(credito: CreditoAsociado, eventId: string): object {
        return {
            event: "credito.creado",
            eventId,
            timestamp: new Date().toISOString(),
            data: {
                id: credito.id,
                numeroCredito: credito.numeroCredito,
                identificacionAsociado: credito.identificacionAsociado,
                valorSolicitado: credito.detalleFinanciero.valorSolicitado,
                estado: credito.estadoCredito?.codigo ?? "SOLICITADO",
            },
        };
    }
}