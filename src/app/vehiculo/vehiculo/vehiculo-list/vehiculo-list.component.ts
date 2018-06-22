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
  private vehiculos: Array<any>;
   
  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.vehiculoService.findAll().subscribe(data => {
      this.vehiculos = data;
    });
  }
}
