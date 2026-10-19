import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class CreditoAdapter {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl; 


  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials);
  }

  listar(filtros: any = {}): Observable<any> {
    let params = new HttpParams();

    Object.keys(filtros).forEach(key => {
      if (filtros[key] !== null && filtros[key] !== '' && filtros[key] !== undefined) {
        params = params.set(key, filtros[key]);
      }
    });

    return this.http.get(`${this.apiUrl}/creditos`, { params });
}


  obtenerPorId(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/creditos/${id}`);
  }


  crear(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/creditos`, data);
  }


  actualizar(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/creditos/${id}`, data);
  }


  cambiarEstado(id: number, estado: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/creditos/${id}/estado`, { estado });
  }


  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/creditos/${id}`);
  }
}