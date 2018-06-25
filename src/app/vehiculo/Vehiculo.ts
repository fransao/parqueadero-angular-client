export class Vehiculo {
 
  placa: string;
  tipoVehiculo: string; 
  cilindraje: number;
  fechaIngreso: Date;
 
 /* constructor (placa: string) {
   this.placa = placa;
 } */

  constructor (placa: string, tipoVehiculo: string, cilindraje: number, fechaIngreso: Date) {
    this.placa = placa;
    this.tipoVehiculo = tipoVehiculo;
    this.cilindraje   = cilindraje;
    this.fechaIngreso = fechaIngreso;
  }

}