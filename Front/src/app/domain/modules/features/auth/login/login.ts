import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreditoAdapter } from '../../../../../infrastructure/adapters/credito/credito.adapter';
import { Router } from '@angular/router';


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

  constructor(private adapter: CreditoAdapter, private router: Router) {}

  onLogin() {
    this.adapter.login({ username: this.username, password: this.password }).subscribe({
      next: (res) => {

        localStorage.setItem('token', res.token);

        this.router.navigate(['/home']);
      },
      error: () => {
        alert('Credenciales incorrectas. Usa admin / admin123');
      }
    });
  }
}
