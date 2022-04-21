import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  private readonly customers = [
    {
      id: 1,
      created_at: new Date(),
      email: 'customer_1@gmail.com',
    },
    {
      id: 2,
      created_at: new Date(),
      email: 'customer_2@gmail.com',
    },
    {
      id: 3,
      created_at: new Date(),
      email: 'customer_3@gmail.com',
    },
    {
      id: 4,
      created_at: new Date(),
      email: 'customer_4@gmail.com',
    },
    {
      id: 5,
      created_at: new Date(),
      email: 'customer_5@gmail.com',
    },
  ];

  public findCustomerById(id: number) {
    return this.customers.find((u) => u.id === id);
  }
}
