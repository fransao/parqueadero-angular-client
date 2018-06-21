import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiculoListComponent } from './vehiculo/vehiculo-list/vehiculo-list.component';
import { VehiculoCreateComponent } from './vehiculo/vehiculo-create/vehiculo-create.component';

const routes: Routes = [
  {path: 'vehiculo', component: VehiculoListComponent},
  {path: 'vehiculo/create', component: VehiculoCreateComponent},
  {path: 'vehiculo/edit/:placa', component: VehiculoCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class VehiculoRoutingModule { }
