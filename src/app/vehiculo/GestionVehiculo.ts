import { Vehiculo } from "./vehiculo";

export class GestionVehiculo {
 
    vehiculo: Vehiculo;
    fechaIngreso: Date;
    fechaSalida: Date;
    valor: number;
   
    constructor (vehiculo: Vehiculo,  fechaIngreso: Date, fechaSalida: Date, valor:number) {
      this.vehiculo = vehiculo;
      this.fechaIngreso = fechaIngreso;
      this.fechaSalida  = fechaSalida;
      this.valor   = valor; 
    }
   
  }