import type { Request,NextFunction, Response } from "express";
import { AppError } from "../../../application/src/shared/app.error.js";


/**
 * Middleware global de manejo de errores.
 * Captura CUALQUIER error lanzado en cualquier capa (controlador, use case, repositorio).
 */
export const errorMiddleware = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
): void => {

    if (err instanceof AppError) {
        res.status(err.statusCode).json({
            success: false,
            error: {
                code: err.code,
                message: err.message,
                ...(err.details && { details: err.details }),
            },
        });
        return;
    }

    if (err.name === 'PrismaClientKnownRequestError') {
        const prismaError = err as any;
        
        if (prismaError.code === 'P2002') {
            res.status(409).json({
                success: false,
                error: {
                    code: 'DUPLICATE_ENTRY',
                    message: 'Ya existe un registro con estos datos',
                    details: prismaError.meta?.target,
                },
            });
            return;
        }

        if (prismaError.code === 'P2025') {
            res.status(404).json({
                success: false,
                error: {
                    code: 'RECORD_NOT_FOUND',
                    message: `El registro solicitado no existe: ${err.message}`,
                },
            });
            return;
        }
    }

    if (err.name === 'PrismaClientValidationError') {
        res.status(400).json({
            success: false,
            error: {
                code: 'DATABASE_VALIDATION_ERROR',
                message: `Datos inválidos para la base de datos: ${err.message}`,
            },
        });
        return;
    }

    
    console.error('🚨 Error no manejado:', err);

    res.status(500).json({
        success: false,
        error: {
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Ocurrió un error inesperado. Contacte al administrador.',
            ...(process.env.NODE_ENV !== 'production' && { debug: err.message }),
        },
    });
};