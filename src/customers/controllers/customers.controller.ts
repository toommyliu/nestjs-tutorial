import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CustomersService } from '../services/customers/customers.service';

@Controller('customers')
export class ControllersController {
  public constructor(private service: CustomersService) {}

  @Get(':id')
  public getCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    const customer = this.service.findCustomerById(id);
    if (customer) {
      res.send(customer);
      return;
    }

    res.status(400).send({ msg: 'customer not found' });
  }

  @Get('/search/:id')
  public getCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.service.findCustomerById(id);
    if (customer) {
      return customer;
    }

    throw new HttpException('customer not found', HttpStatus.BAD_REQUEST);
  }
}
