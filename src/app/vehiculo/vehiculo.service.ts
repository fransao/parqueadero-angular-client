import { Injectable } from '@angular/core';
import { Vehiculo } from './vehiculo';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class VehiculoService {
  private apiUrl = 'http://localhost:8090/parqueadero/';
  constructor(private http: Http) { }

  findAll(): Observable<Vehiculo[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


}
