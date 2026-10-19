import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CreditoAdapter } from '../../../../../../infrastructure/adapters/credito/credito.adapter';

@Component({
  selector: 'app-crear-credito',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './crear-credito.html',
  styleUrls: ['./crear-credito.css']
})
export class CrearCreditoComponent {
  private adapter = inject(CreditoAdapter);
  private router = inject(Router);

  nuevoCredito = {
    identificacionAsociado: '',
    nombreAsociado: '',
    tipoCredito: 'LIBRE_INVERSION',
    valorSolicitado: 0,
    tasaInteres: 1.5,
    numeroCuotas: 0,
    formaPago: 'NOMINA',
    estado: 'SOLICITADO',
    createdBy: 'Admin'
  };

  guardando = false;
  errorMessage = '';
  successMessage = '';

  guardar() {
    this.guardando = true;
    this.errorMessage = '';
    this.successMessage = '';

    const payload = {
      ...this.nuevoCredito,
      valorSolicitado: Number(this.nuevoCredito.valorSolicitado),
      numeroCuotas: Number(this.nuevoCredito.numeroCuotas),
      tasaInteres: Number(this.nuevoCredito.tasaInteres)
    };

    if (payload.valorSolicitado <= 0 || payload.numeroCuotas <= 0) {
      this.errorMessage = 'El valor solicitado y las cuotas deben ser mayores a cero.';
      this.guardando = false;
      return;
    }

    this.adapter.crear(payload).subscribe({
      next: (res) => {
        this.guardando = false;
        this.successMessage = '¡Crédito creado exitosamente! Redirigiendo...';

        setTimeout(() => {
          this.router.navigate(['/creditos']);
        }, 1500);
      },
      error: (err) => {
        this.guardando = false;
        console.error('Error del backend:', err);

        this.errorMessage = err.error?.error?.message || 'Error al crear el crédito. Verifica los datos.';
      }
    });
  }
}