import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizarusu',
  templateUrl: './actualizarusu.component.html',
  styleUrls: ['./actualizarusu.component.css'],
})
export class ActualizarUsuComponent {
  id: number = 0; // Inicializa con 0 o el valor que prefieras
  usuario: { user: string; password: string } = { user: '', password: '' };

  constructor(private http: HttpClient, private router: Router) {}

  buscarUsuario() {
    if (this.id) {
      this.http.get(`http://localhost:9898/rest_usu/listar/${this.id}`).subscribe((data: any) => {
        this.usuario = data;
      });
    }
  }

  actualizar() {
    this.http.put(`http://localhost:9898/rest_usu/actualiza/${this.id}`, this.usuario).subscribe(() => {
      alert('Usuario actualizado');
      this.router.navigate(['/']);
    });
  }
}
