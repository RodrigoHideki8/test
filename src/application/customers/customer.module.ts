import { CustomerController } from './customer.controller';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GetCustomerUseCaseProvider } from './use-cases/customer.use-case';
import { CqrsModule } from '@nestjs/cqrs';
import { DatabaseModule } from 'src/infrastructure/repositories/database.modules';

@Module({
  imports: [CqrsModule, DatabaseModule],

  controllers: [CustomerController],
  providers: [GetCustomerUseCaseProvider],



})

export class CustomerModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply().forRoutes(CustomerController);
  }
}

