import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ListarusuComponent } from './usuarios/listarusu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo_09';

  @ViewChild(ListarusuComponent) listarusuComponent!: ListarusuComponent;

  constructor(private router: Router) {}

  cargarUsuarios() {
    this.listarusuComponent.cargarUsuarios(); // Llama al método cargarUsuarios del componente
  }
}
