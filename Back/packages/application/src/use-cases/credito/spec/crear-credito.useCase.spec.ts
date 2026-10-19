import { describe, it, expect, beforeEach, jest } from '@jest/globals';
import { CrearCreditoUseCase } from "../crear-credito.useCase";
import { ValidationError } from "../../../shared/app.error";

const mockCreditoRepo = {} as any;
const mockCreationService = {} as any;

describe('CrearCreditoUseCase', () => {
  let useCase: CrearCreditoUseCase;

  beforeEach(() => {
    useCase = new CrearCreditoUseCase(mockCreationService, mockCreditoRepo);
  });

  it('debe lanzar un error si el valor solicitado es menor o igual a cero', async () => {
    const dto = { valorSolicitado: 0 } as any;
    await expect(useCase.execute(dto)).rejects.toThrow(ValidationError);
  });

  it('debe lanzar un error si la tasa de interés es negativa', async () => {
    const dto = { valorSolicitado: 1000, tasaInteres: -1 } as any;
    await expect(useCase.execute(dto)).rejects.toThrow(ValidationError);
  });
});