import { Component, OnInit } from '@angular/core';
import { Clusuario } from '../modelo/clusuario';
import { SerusuService } from '../servicios/serusu.service';

@Component({
  selector: 'app-listarusu',
  templateUrl: './listarusu.component.html',
  styleUrls: ['./listarusu.component.css']
})
export class ListarusuComponent implements OnInit {
  usuarios: Clusuario[] = [];

  constructor(private serusuService: SerusuService) { }

  ngOnInit() {
    this.cargarUsuarios(); // Carga los usuarios al inicializar
  }

  cargarUsuarios(): void {
    this.serusuService.lista().subscribe(
      data => {
        this.usuarios = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
