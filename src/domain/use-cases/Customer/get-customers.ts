import { UseCase } from '../use-case';
import { ICustomer } from '../../entities';

export interface GetCustomerInput {
  name: string;
  email: string;
  documentValue: string;
  page: number;
  size: number;
}

export type GetCustomerOutput = ICustomer;

export abstract class GetCustomer extends UseCase<
  Partial<GetCustomerInput>,
  GetCustomerOutput
> {}
