import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminarusu',
  templateUrl: './eliminarusu.component.html',
  styleUrls: ['./eliminarusu.component.css'],
})
export class EliminarUsuComponent {
  id: number = 0; // Inicializa con 0 o el valor que prefieras
  usuario: { user: string; password: string } | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  buscarUsuario() {
    if (this.id) {
      this.http.get(`http://localhost:9898/rest_usu/listar/${this.id}`).subscribe(
        (data: any) => {
          this.usuario = data;
        },
        (error) => {
          console.error('Usuario no encontrado', error);
          this.usuario = null;
        }
      );
    }
  }

  eliminar() {
    if (this.id) {
      this.http.delete(`http://localhost:9898/rest_usu/elimina/${this.id}`).subscribe(() => {
        alert('Usuario eliminado');
        this.router.navigate(['/']);
      });
    }
  }
}
