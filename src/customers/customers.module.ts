import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CustomersController } from './controllers/customers.controller';
import { ValidateCustomerAccount } from './middleware/validate-customer-account.middleware';
import { ValidateCustomer } from './middleware/validate-customer.middleware';
import { CustomersService } from './services/customers/customers.service';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateCustomer, ValidateCustomerAccount)
      .exclude(
        {
          path: 'api/customers/create',
          method: RequestMethod.POST,
        },
        {
          path: 'api/customers',
          method: RequestMethod.GET,
        },
      )
      .forRoutes(CustomersController);
  }
}
