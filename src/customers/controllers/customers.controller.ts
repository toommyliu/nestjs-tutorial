import { Controller, Get } from '@nestjs/common';
import { CustomersService } from '../services/customers/customers.service';

@Controller('customers')
export class ControllersController {
  public constructor(private service: CustomersService) {}

  @Get()
  public getCustomer() {
    return this.service.findCustomer();
  }
}
