export interface CrearWebhookPendienteData {
    eventId: string;
    eventType: string;
    idCredito: number;
    entidadId: number;
    payload: string;
}

export interface IWebhookOutboxRepository {
    crearPendiente(data: CrearWebhookPendienteData): Promise<void>;
    obtenerPendientesParaEnvio(limit: number): Promise<any[]>;
    marcarComoEnviado(id: number): Promise<void>;
    marcarComoFallido(id: number, error: string, proximoIntento: Date): Promise<void>;
}