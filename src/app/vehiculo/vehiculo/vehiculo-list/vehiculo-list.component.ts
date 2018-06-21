import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '..';
import { VehiculoService } from '../../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css'],
  providers: [VehiculoService]
})
export class VehiculoListComponent implements OnInit {
  private vehiculos: Vehiculo[]; 
  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.getAllVehiculos();
  }

  getAllVehiculos () {
    this.vehiculoService.findAll().subscribe(
      vehiculos => {
       this.vehiculos = vehiculos; 
      },
      err => {
        console.log(err);
      }
    )
  }
}
