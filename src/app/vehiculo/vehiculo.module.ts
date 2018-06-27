import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VehiculoRoutingModule } from './vehiculo-routing.module';
import { VehiculoListComponent } from './vehiculo/vehiculo-list/vehiculo-list.component';
import { VehiculoCreateComponent } from './vehiculo/vehiculo-create/vehiculo-create.component';
import { VehiculoSalidaComponent } from './vehiculo/vehiculo-salida/vehiculo-salida.component';
import { TcrmComponent } from './vehiculo/tcrm/tcrm.component';

@NgModule({
  imports: [
    CommonModule,
    VehiculoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TcrmComponent  
  ],
  declarations: [VehiculoListComponent, VehiculoCreateComponent, VehiculoSalidaComponent, TcrmComponent]
})
export class VehiculoModule { }
