import type { Request,NextFunction, Response } from "express";


export const notFoundMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    res.status(404).json({
        success: false,
        error: {
            code: 'ROUTE_NOT_FOUND',
            message: `La ruta ${req.method} ${req.originalUrl} no existe`,
        },
    });
};