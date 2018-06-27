import { Injectable } from '@angular/core';
import { Vehiculo } from './vehiculo';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';



@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  private apiUrl = 'http://localhost:8090/parqueadero/vehiculo/';
  private apiTcrmUrl = 'http://localhost:8090/parqueadero/vehiculo/tcrm';

  constructor(private http: HttpClient) { }

  findAll(): Observable<any>  {
    return this.http.get(this.apiUrl)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  saveIngresoVehiculo (vehiculo: Vehiculo): Observable<any> {
    return this.http.post(this.apiUrl, vehiculo)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
 
  /*saveSalidaVehiculo (placaVehiculo: string): Observable<any> {
    return this.http.put(this.apiUrl+placaVehiculo, placaVehiculo)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }*/

  calcularValorParqueadero (placaVehiculo: string): Observable<any> {
    return this.http.put(this.apiUrl+placaVehiculo, placaVehiculo)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  obtenerTCRM (): Observable<any> {
    return this.http.get(this.apiTcrmUrl)
    .catch((error:any) => Observable.throw(error.json().error || 'Serve error'));
  }

}
