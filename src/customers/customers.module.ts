import { Module } from '@nestjs/common';
import { ControllersController } from './controllers/customers.controller';
import { CustomersService } from './services/customers/customers.service';

@Module({
  controllers: [ControllersController],
  providers: [CustomersService],
})
export class CustomersModule {}
