import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from '@angular/router';

import { VehiculoService } from '../../vehiculo.service';
import { GestionVehiculo } from '../../GestionVehiculo';

@Component({
  selector: 'app-vehiculo-salida',
  templateUrl: './vehiculo-salida.component.html',
  styleUrls: ['./vehiculo-salida.component.css'],
  providers: [VehiculoService]
})

export class VehiculoSalidaComponent implements OnInit {
 
  private gestionVehiculo: GestionVehiculo;
  gestionVehiculoForm: FormGroup;
  messageService = '';
  submitted = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private vehiculoService: VehiculoService) { }

  ngOnInit() {
     this.gestionVehiculoForm = new FormGroup({
      placa: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      tipoVehiculo: new FormControl(''),      
      fechaIngreso: new FormControl(''),  
      fechaSalida: new FormControl(''),    
      valorPagar: new FormControl(''),  
    });
    
  }

  onSubmit() {
    if (this.gestionVehiculoForm.valid) {
      this.vehiculoService.calcularValorParqueadero(this.gestionVehiculoForm.controls['placa'].value).subscribe(data => {        
        this.gestionVehiculo = data;
        this.gestionVehiculoForm.setValue ({
          placa : this.gestionVehiculo.vehiculo.placa,
          tipoVehiculo : this.gestionVehiculo.vehiculo.tipoVehiculo,
          fechaIngreso : new Date(this.gestionVehiculo.fechaIngreso),
          fechaSalida : new Date(this.gestionVehiculo.fechaSalida),
          valorPagar : this.gestionVehiculo.valor,
        });
        
        this.messageService = 'Registro salida vehiculo exitoso';        

      }, error=>{
        this.messageService = error.message;
      });
    }     
    this.submitted = true;
  }

}
