import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BreedsService } from './services/breeds.service';
import { ListarComponent } from './pages/listar/listar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,        // se inporta la libreria, para que cualquier servicio pueda hacer peticiones
    FormsModule
  ],
  providers: [              // Se inporta el servicio, para que pueda se consumido por cualquier componente
    BreedsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
