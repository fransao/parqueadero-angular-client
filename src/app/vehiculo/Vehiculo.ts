export class Vehiculo {
 
    placa: string;
    tipoVehiculo: number; 
    fechaIngreso: Date;
   
    constructor (placa: string, tipoVehiculo: number, fechaIngreso: Date) {
      this.placa = placa;
      this.tipoVehiculo = tipoVehiculo;
      this.fechaIngreso = fechaIngreso;
    }
   
  }