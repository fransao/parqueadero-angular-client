import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from '@angular/router';

import { VehiculoService } from '../../vehiculo.service';
import { Vehiculo } from '../../vehiculo';

@Component({
  selector: 'app-vehiculo-create',
  templateUrl: './vehiculo-create.component.html',
  styleUrls: ['./vehiculo-create.component.css'],
  providers: [VehiculoService]
})

export class VehiculoCreateComponent implements OnInit {

  private vehiculo: Vehiculo;
  vehiculoForm: FormGroup;
  submitted = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.vehiculoForm = new FormGroup({
      placa: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      tipoVehiculo: new FormControl('', Validators.required),
      cilindraje: new FormControl(''),     
    });
    
  }

  onSubmit() {
    if (this.vehiculoForm.valid) {

      let vehiculo: Vehiculo = new Vehiculo(
      this.vehiculoForm.controls['placa'].value,
      this.vehiculoForm.controls['tipoVehiculo'].value,
      this.vehiculoForm.controls['cilindraje'].value, 
      new Date);
      this.vehiculoService.saveIngresoVehiculo(vehiculo).subscribe(data => {        
        this.vehiculo = data;
      }, error=>{
        console.error(error)
      });
    }
      this.submitted = true;

      this.vehiculoForm.reset();
      this.router.navigate(['/vehiculo/create']);

    }
    
   

}
