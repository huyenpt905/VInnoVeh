export class BillModel {
  id: number;
  idOwner: number;
  idCustomer: number;
  idVehicle: number;
  startTime: number;
  stopTime: number;
  prepay: number;
  completed: boolean;
}
