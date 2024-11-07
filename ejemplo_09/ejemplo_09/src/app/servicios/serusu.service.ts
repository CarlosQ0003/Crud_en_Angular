import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clusuario } from '../modelo/clusuario';

@Injectable({
  providedIn: 'root'
})
export class SerusuService {
  usuarioURL = 'http://localhost:9898/rest_usu/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Clusuario[]> {
    return this.httpClient.get<Clusuario[]>(this.usuarioURL + 'listar');
  }

  public registrar(usuario: Clusuario): Observable<Clusuario> {
    return this.httpClient.post<Clusuario>(this.usuarioURL + 'registrar', usuario);
  }

  public actualizar(id: number, usuario: Clusuario): Observable<Clusuario> {
    return this.httpClient.put<Clusuario>(`${this.usuarioURL}actualiza/${id}`, usuario);
  }

  public eliminar(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.usuarioURL}elimina/${id}`);
  }

  public buscar(id: number): Observable<Clusuario> {
    return this.httpClient.get<Clusuario>(`${this.usuarioURL}buscar/${id}`);
  }
}
