import {
  GetCustomer,
  GetCustomerInput,
  GetCustomerOutput,
} from '../../../domain/use-cases/Customer/get-customers';
import { Injectable } from '@nestjs/common';
import { Provider } from '@nestjs/common/interfaces';
import { QueryBus } from '@nestjs/cqrs';
import { from, Observable } from 'rxjs';
import { CustomerQuery } from '../../../application/customers/queries/models/customer.query';

@Injectable()
export class GetCustomerUseCase implements GetCustomer {
  constructor(private readonly commandBus: QueryBus) { }

  execute(input: GetCustomerInput): Observable<GetCustomerOutput> {
    return from(
      this.commandBus.execute(
        new CustomerQuery(
          input.name,
          input.email,
          input.documentValue,
          input.page.toString(),
          input.size,
        ),
      )
    ) as Observable<GetCustomerOutput>;
  }
}

export const GetCustomerUseCaseProvider: Provider = {
  provide: 'GetCustomerUseCase',
  useClass: GetCustomerUseCase,
};
