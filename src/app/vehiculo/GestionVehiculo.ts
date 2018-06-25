export class GestionVehiculo {
 
    placa: string;
    tipoVehiculo: string; 
    fechaIngreso: Date;
    fechaSalida: Date;
    valorPagar: number;
   
    /*constructor (placa: string) {
      this.placa = placa;
    }*/

    constructor (placa: string, tipoVehiculo: string, fechaIngreso: Date, fechaSalida: Date, valorPagar:number) {
      this.placa = placa;
      this.tipoVehiculo = tipoVehiculo;
      this.fechaIngreso = fechaIngreso;
      this.fechaSalida  = fechaSalida;
      this.valorPagar   = valorPagar; 
    }
   
  }