import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarusuComponent } from './usuarios/listarusu.component';
import { RegistrarUsuComponent } from './usuarios/registrarusu.component';
import { ActualizarUsuComponent } from './usuarios/actualizarusu.component';
import { EliminarUsuComponent } from './usuarios/eliminarusu.component';

const routes: Routes = [
  { path: '', component: ListarusuComponent },
  { path: 'registrar', component: RegistrarUsuComponent },
  { path: 'actualizar', component: ActualizarUsuComponent },
  { path: 'eliminar', component: EliminarUsuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
