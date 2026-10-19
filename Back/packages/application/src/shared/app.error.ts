export class AppError extends Error {
    constructor(
        public readonly code: string,       
        public readonly message: string,   
        public readonly statusCode: number,
        public readonly details?: any     
    ) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class ValidationError extends AppError {
    constructor(message: string, details?: any) {
        super('VALIDATION_ERROR', message, 400, details);
    }
}

export class NotFoundError extends AppError {
    constructor(message: string, code: string = 'NOT_FOUND') {
        super(code, message, 404);
    }
}

export class CreditoNotFoundError extends NotFoundError {
    constructor(id: number | string) {
        super(`El crédito con identificador ${id} no existe`, 'CREDITO_NOT_FOUND');
    }
}

export class ConflictError extends AppError {
    constructor(message: string, code: string = 'CONFLICT') {
        super(code, message, 409);
    }
}

export class CreditoDuplicadoError extends ConflictError {
    constructor(identificacion: string) {
        super(
            `Ya existe un crédito activo para la identificación ${identificacion}`,
            'CREDITO_DUPLICADO'
        );
    }
}

export class TransicionEstadoInvalidaError extends ConflictError {
    constructor(estadoActual: string, estadoNuevo: string) {
        super(
            `No se puede pasar de '${estadoActual}' a '${estadoNuevo}'`,
            'TRANSICION_ESTADO_INVALIDA'
        );
    }
}

export class UnauthorizedError extends AppError {
    constructor(message: string = 'No autorizado') {
        super('UNAUTHORIZED', message, 401);
    }
}

export class ForbiddenError extends AppError {
    constructor(message: string = 'Acceso denegado') {
        super('FORBIDDEN', message, 403);
    }
}

export class BusinessRuleError extends AppError {
    constructor(message: string, code: string = 'BUSINESS_RULE_VIOLATION') {
        super(code, message, 422);
    }
}