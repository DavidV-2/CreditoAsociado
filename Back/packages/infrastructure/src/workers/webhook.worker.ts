import { prisma } from "../lib/prisma.js";
import { WebhookOutboxRepository } from "../repositories/webhook-outbox.repository.js";

export const iniciarWebhookWorker = () => {
    const webhookRepo = new WebhookOutboxRepository(prisma);

    console.log("🚀 Worker de Webhooks iniciado. Buscando pendientes...");

    setInterval(async () => {
        try {

            const pendientes = await webhookRepo.obtenerPendientesParaEnvio(3);
            
            for (const item of pendientes) {
                try {
                    console.log(`📡 Enviando webhook para crédito ID: ${item.idCredito}...`);
                    
                    await new Promise(resolve => setTimeout(resolve, 500)); 

                    await webhookRepo.marcarComoEnviado(item.id);
                    console.log(`✅ Webhook enviado correctamente (Outbox ID: ${item.id})`);

                } catch (error: any) {

                    const proximoIntento = new Date();
                    proximoIntento.setMinutes(proximoIntento.getMinutes() + 5); 
                    
                    await webhookRepo.marcarComoFallido(item.id, error.message, proximoIntento);
                    console.error(`❌ Falló el webhook (Outbox ID: ${item.id}). Reintentará en 5 min.`);
                }
            }
        } catch (error) {
            console.error("Error en el worker de webhooks:", error);
        }
    }, 15000);
};