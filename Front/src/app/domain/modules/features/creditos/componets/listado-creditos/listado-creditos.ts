import { Component, OnInit, inject, ChangeDetectorRef, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CreditoAdapter } from '../../../../../../infrastructure/adapters/credito/credito.adapter';


@Component({
  selector: 'app-listado-creditos',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './listado-creditos.html',
  styleUrls: ['./listado-creditos.css']
})
export class ListadoCreditosComponent implements OnInit {
  creditos: any[] = [];
  loading = false;
  
  private adapter = inject(CreditoAdapter);
  private cdr = inject(ChangeDetectorRef);
  private platformId = inject(PLATFORM_ID);

  filtros = { page: 1, limit: 5, busqueda: '', estado: '', identificacionAsociado: '' };
  meta = { total: 0, page: 1, limit: 5, totalPages: 1 };
  estados = ['SOLICITADO', 'EN_ESTUDIO', 'APROBADO', 'RECHAZADO', 'DESEMBOLSADO', 'CANCELADO'];

  ngOnInit() {
    this.cargarCreditos();
  }

  cargarCreditos() {
    this.loading = true;
    this.cdr.detectChanges();
    this.adapter.listar(this.filtros).subscribe({
      next: (res: any) => {
        console.log('Respuesta recibida en listado:', res);
        
        this.creditos = res.data || [];
        this.meta = res.meta || { total: 0, page: 1, limit: 5, totalPages: 1 };
        this.loading = false;

        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error('Error al cargar créditos:', err);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  buscar() {
    this.filtros.page = 1;
    this.cargarCreditos();
  }

  limpiarFiltros() {
    this.filtros = { page: 1, limit: 5, busqueda: '', estado: '', identificacionAsociado: '' };
    this.cargarCreditos();
  }

  cambiarPagina(pagina: number) {
    if (pagina >= 1 && pagina <= this.meta.totalPages) {
      this.filtros.page = pagina;
      this.cargarCreditos();
    }
  }
}