import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CreditoAdapter } from '../../../../../../infrastructure/adapters/credito/credito.adapter';

@Component({
  selector: 'app-detalle-credito',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalle-credito.html',
  styleUrls: ['./detalle-credito.css']
})
export class DetalleCreditoComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private adapter = inject(CreditoAdapter);
  private cdr = inject(ChangeDetectorRef);

  credito: any = null;
  historial: any[] = [];
  loading = true;

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        
        this.loading = true;
        this.credito = null;
        this.cdr.detectChanges();

        if (!id) {
          this.loading = false;
          this.cdr.detectChanges();
          return [];
        }

        return this.adapter.obtenerPorId(id);
      })
    ).subscribe({
      next: (res: any) => {
        
        this.credito = res.data || res;

        this.historial = this.credito.historial || []; 
        
        this.loading = false;

        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error('ERROR EN SUBSCRIBE:', err);
        this.loading = false;
        this.credito = null;
        this.cdr.detectChanges();
      }
    });
  }
}