import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';


import { VehiculoRoutingModule } from './vehiculo/vehiculo-routing.module';
import { AppComponent } from './app.component';
import { VehiculoModule } from './vehiculo/vehiculo.module';
import { VehiculoService } from './vehiculo/vehiculo.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VehiculoRoutingModule,
    VehiculoModule,
    HttpClientModule
  ],
  providers: [VehiculoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
