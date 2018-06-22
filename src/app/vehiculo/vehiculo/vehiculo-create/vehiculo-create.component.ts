import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from '@angular/router';

import { VehiculoService } from '../../vehiculo.service';

@Component({
  selector: 'app-vehiculo-create',
  templateUrl: './vehiculo-create.component.html',
  styleUrls: ['./vehiculo-create.component.css'],
  providers: [VehiculoService]
})
export class VehiculoCreateComponent implements OnInit {

  vehiculoForm: FormGroup;

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit() {

  }

}
