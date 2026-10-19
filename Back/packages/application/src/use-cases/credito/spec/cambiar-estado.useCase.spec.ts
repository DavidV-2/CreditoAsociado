import { describe, it, expect, beforeEach, jest } from '@jest/globals';
import { CambiarEstadoUseCase } from "../cambiar-estado.useCase";
import { CreditoNotFoundError, TransicionEstadoInvalidaError } from "../../../shared/app.error"; 
import { prisma } from "../../../../../infrastructure/src/lib/prisma"; 

// Mockeamos Prisma para no tocar la base de datos real
jest.mock("../../../../../infrastructure/src/lib/prisma", () => ({
  prisma: {
    estadoCredito: {
      findUnique: jest.fn(),
      findFirst: jest.fn(),
    },
  },
}));

describe('CambiarEstadoUseCase', () => {
  let useCase: CambiarEstadoUseCase;
  const mockCreditoRepo = {
    obtenerPorId: jest.fn(),
    cambiarEstado: jest.fn(),
  } as any;

  beforeEach(() => {
    useCase = new CambiarEstadoUseCase(mockCreditoRepo);
    jest.clearAllMocks();
  });

  it('debe lanzar un error si el crédito no existe', async () => {
    // Simulamos que el repositorio devuelve null
    mockCreditoRepo.obtenerPorId.mockResolvedValue(null);

    // CAMBIO: Esperamos CreditoNotFoundError
    await expect(useCase.execute(1, 'APROBADO', 'admin'))
      .rejects.toThrow(CreditoNotFoundError);
  });

  it('debe lanzar un error si se intenta una transición inválida', async () => {
    // 1. Simulamos que el crédito actual está en estado SOLICITADO (id 1)
    mockCreditoRepo.obtenerPorId.mockResolvedValue({ 
      id: 1, 
      idEstadoCredito: 1 
    });

    // 2. Simulamos la respuesta de la BD para los estados
    (prisma.estadoCredito.findUnique as jest.Mock).mockResolvedValue({ 
      id: 1, 
      codigo: 'SOLICITADO' 
    });
    (prisma.estadoCredito.findFirst as jest.Mock).mockResolvedValue({ 
      id: 5, 
      codigo: 'DESEMBOLSADO' 
    });

    // CAMBIO: Esperamos TransicionEstadoInvalidaError
    await expect(useCase.execute(1, 'DESEMBOLSADO', 'admin'))
      .rejects.toThrow(TransicionEstadoInvalidaError);
  });
});