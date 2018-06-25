import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from '@angular/router';

import { VehiculoService } from '../../vehiculo.service';
//import { GestionVehiculo } from '../../GestionVehiculo';

@Component({
  selector: 'app-vehiculo-salida',
  templateUrl: './vehiculo-salida.component.html',
  styleUrls: ['./vehiculo-salida.component.css'],
  providers: [VehiculoService]
})

export class VehiculoSalidaComponent implements OnInit {
 
  private gestionVehiculo: GestionVehiculo;
  gestionVehiculoForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private vehiculoService: VehiculoService) { }

  ngOnInit() {
     this.gestionVehiculoForm = new FormGroup({
      placa: new FormControl('', Validators.required),
      tipoVehiculo: new FormControl(''),
      cilindraje: new FormControl(''),
      fechaIngreso: new FormControl(''),  
      fechaSalida: new FormControl(''),    
    });
  }

  onSubmit() {



    }

}
