import { Injectable } from '@nestjs/common';
import { CustomerDto } from '../../dtos/Customer.dto';

@Injectable()
export class CustomersService {
  private readonly customers: Customer[] = [
    {
      id: 1,
      created_at: new Date(),
      email: 'customer_1@gmail.com',
      name: 'Customer 1',
    },
    {
      id: 2,
      created_at: new Date(),
      email: 'customer_2@gmail.com',
      name: 'Customer 2',
    },
    {
      id: 3,
      created_at: new Date(),
      email: 'customer_3@gmail.com',
      name: 'Customer 3',
    },
    {
      id: 4,
      created_at: new Date(),
      email: 'customer_4@gmail.com',
      name: 'Customer 4',
    },
    {
      id: 5,
      created_at: new Date(),
      email: 'customer_5@gmail.com',
      name: 'Customer 5',
    },
  ];

  public findCustomerById(id: number) {
    return this.customers.find((u) => u.id === id);
  }

  public createCustomer(customer: CustomerDto) {
    this.customers.push({
      created_at: new Date(),
      ...customer,
    });
  }

  public getCustomers() {
    return this.customers;
  }
}

export interface Customer {
  id: number;
  created_at: Date;
  email: string;
  name: string;
}
