
import { Routes } from "@angular/router";
import { MainLayoutComponent } from "../layout/main-layout-component";

export const ROUTES_PAGES: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('../../domain/modules/features/auth/login/login')
        .then(m => m.LoginComponent)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./home/home').then(m => m.HomeComponent)
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('../../domain/modules/features/dashboard/dashboard')
            .then(m => m.DashboardComponent)
      },
      {
        path: 'creditos',
        loadComponent: () =>
          import('../../domain/modules/features/creditos/componets/listado-creditos/listado-creditos')
            .then(m => m.ListadoCreditosComponent)
      },
      {
        path: 'creditos/crear',
        loadComponent: () =>
          import('../../domain/modules/features/creditos/componets/crear-credito/crear-credito')
            .then(m => m.CrearCreditoComponent)
      },
      {
        path: 'creditos/:id',
        loadComponent: () =>
          import('../../domain/modules/features/creditos/componets/detalle-credito/detalle-credito')
            .then(m => m.DetalleCreditoComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
