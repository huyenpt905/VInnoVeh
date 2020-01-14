export class BillModel {
  ID: number;
  TenantID: number;
  Firstname: string;
  Lastname: string;
  CustomerPhone: number;
  CarID: number;
  StartTime: number;
  StopTime: number;
  Prepay: number;
  completed: boolean;
}
export class Data {
  Data: BillModel[];
}
