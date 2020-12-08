import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BreedsService } from './services/breeds.service';
import { ListarComponent } from './pages/listar/listar.component';
import { FormsModule } from '@angular/forms';
import { RandomComponent } from './pages/random/random.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    RandomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,        // se inporta la libreria, para que cualquier servicio pueda hacer peticiones
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [              // Se inporta el servicio, para que pueda se consumido por cualquier componente
    BreedsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
