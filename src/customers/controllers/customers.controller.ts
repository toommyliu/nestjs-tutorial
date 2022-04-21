import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { CustomerDto } from '../dtos/Customer.dto';
import { CustomersService } from '../services/customers/customers.service';

@Controller('customers')
export class CustomersController {
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

  @Get('')
  public getCustomers() {
    return this.service.getCustomers();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  public createCustomer(@Body() customer: CustomerDto) {
    this.service.createCustomer(customer);
  }
}
