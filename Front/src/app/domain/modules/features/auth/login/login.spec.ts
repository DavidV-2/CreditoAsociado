import { Component, inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { CreditoAdapter } from '../../../../../infrastructure/adapters/credito/credito.adapter';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class LoginComponent {
  username = '';
  password = '';
  private platformId = inject(PLATFORM_ID);

  constructor(private adapter: CreditoAdapter, private router: Router) {}

  onLogin() {
    this.adapter.login({ username: this.username, password: this.password }).subscribe({
      next: (res) => {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('token', res.token);
        }
        this.router.navigate(['/creditos']);
      },
      error: (err) => {
        console.error(err);
        alert('Credenciales incorrectas. Usa admin / admin123');
      }
    });
  }
}