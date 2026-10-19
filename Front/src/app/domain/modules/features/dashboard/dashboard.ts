import { Component, inject, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/service/dashboard-service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [AsyncPipe, CommonModule],
  standalone: true,
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class DashboardComponent implements OnInit {
  private dashboardService = inject(DashboardService);

  metrics$: Observable<any> | undefined;

  ngOnInit(): void {
    this.metrics$ = this.dashboardService.getMetrics();
  }
}