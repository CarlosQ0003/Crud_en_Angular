import { Component } from '@angular/core';
import { Clusuario } from '../modelo/clusuario';
import { SerusuService } from '../servicios/serusu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarusu',
  templateUrl: './registrarusu.component.html',
  styleUrls: ['./registrarusu.component.css']
})
export class RegistrarUsuComponent {
  usuario: Clusuario = new Clusuario('', '');

  constructor(private serusuService: SerusuService, private router: Router) {}

  registrar(): void {
    this.serusuService.registrar(this.usuario).subscribe(
      response => {
        console.log('Usuario registrado:', response);
        this.router.navigate(['/']); // Redirige a la lista de usuarios
      },
      err => {
        console.error('Error al registrar usuario', err);
      }
    );
  }
}
