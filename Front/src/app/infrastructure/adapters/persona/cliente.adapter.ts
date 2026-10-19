import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';


@Injectable({ providedIn: 'root' })
export class ClienteAdapter {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  listar(): Observable<any> {
    return this.http.get(`${this.apiUrl}/clientes`);
  }

  crear(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/clientes`, data);
  }
}