import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';

import { VehiculoService } from '../../vehiculo.service';

@Component({
  selector: 'app-tcrm',
  templateUrl: './tcrm.component.html',
  styleUrls: ['./tcrm.component.css']
})
export class TcrmComponent implements OnInit {

  valorTrm: number;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private vehiculoService: VehiculoService) { }

  ngOnInit() {
    
      this.vehiculoService.obtenerTCRM().subscribe(data => {
        this.valorTrm = data;
      },
      error=>{
        console.error(error)
      });
  }   
}
