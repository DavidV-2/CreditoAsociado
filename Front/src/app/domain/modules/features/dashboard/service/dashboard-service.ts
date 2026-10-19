import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CreditoAdapter } from '../../../../../infrastructure/adapters/credito/credito.adapter';


@Injectable({ providedIn: 'root' })
export class DashboardService {
  private adapter = inject(CreditoAdapter);

  getMetrics(): Observable<any> {
    
    return this.adapter.listar().pipe(
      map((res: any) => {

        const creditos = res.data || [];
        
        const totalCreditos = creditos.length;
        
        const montoTotal = creditos.reduce((acc: number, c: any) => 
          acc + Number(c.detalleFinanciero?.valorSolicitado || c.valorSolicitado || 0), 0
        );

        const conteoEstados: { [key: string]: number } = {};
        creditos.forEach((c: any) => {
          const estado = c.estado?.codigo || c.estado || 'DESCONOCIDO';
          conteoEstados[estado] = (conteoEstados[estado] || 0) + 1;
        });

        const cantidadCreditosPorEstado = Object.keys(conteoEstados).map(estado => ({
          estado,
          cantidad: conteoEstados[estado]
        }));

        return { totalCreditos, montoTotal, cantidadCreditosPorEstado };
      })
    );
  }
}