import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarusuComponent } from './usuarios/listarusu.component';
import { RegistrarUsuComponent } from './usuarios/registrarusu.component';
import { ActualizarUsuComponent } from './usuarios/actualizarusu.component';
import { EliminarUsuComponent } from './usuarios/eliminarusu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListarusuComponent,
    RegistrarUsuComponent,
    ActualizarUsuComponent,
    EliminarUsuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
