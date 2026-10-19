export class WebhookOutbox {
    constructor(
        public readonly id: number,
        public readonly eventId: string,
        public readonly eventType: string,
        public readonly idCredito: number,
        public readonly payload: string,
        public readonly estado: string,          
        public readonly intentos: number,
        public readonly ultimoError: string | null,
        public readonly proximoIntento: Date,
        public readonly fechaCreacion: Date,
        public readonly fechaEnvio: Date | null,
    ) {}
}