import { Injectable } from '@angular/core';
import { Vehiculo } from './vehiculo';
import { HttpClient } from "@angular/common/http";
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';



@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  private apiUrl = 'http://localhost:8090/parqueadero/vehiculo/';
  private apiCreateUrl = 'http://localhost:8090/parqueadero/vehiculo/{placa}';

  constructor(private http: HttpClient) { }

  findAll(): Observable<any>  {
    return this.http.get(this.apiUrl);
  }

  saveIngresoVehiculo (vehiculo: Vehiculo): Observable<any> {
    return this.http.post(this.apiUrl, vehiculo);
  }
 
}
