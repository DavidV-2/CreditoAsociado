import { Component } from '@angular/core';
import { DashboardComponent } from '../../../domain/modules/features/dashboard/dashboard';

@Component({
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
  standalone: true,
  imports: [DashboardComponent],
})
export class HomeComponent {
  
}
