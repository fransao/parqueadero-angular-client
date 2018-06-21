import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculoRoutingModule } from './vehiculo-routing.module';
import { VehiculoListComponent } from './vehiculo/vehiculo-list/vehiculo-list.component';
import { VehiculoCreateComponent } from './vehiculo/vehiculo-create/vehiculo-create.component';

@NgModule({
  imports: [
    CommonModule,
    VehiculoRoutingModule
  ],
  declarations: [VehiculoListComponent, VehiculoCreateComponent]
})
export class VehiculoModule { }
