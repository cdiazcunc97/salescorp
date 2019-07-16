import {ISaleViewModel} from './ISaleViewModel';

export interface ICustomerViewModel {
  idCliente: bigint;
  dni: string;
  nombres: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  estadoCliente: string;
}
