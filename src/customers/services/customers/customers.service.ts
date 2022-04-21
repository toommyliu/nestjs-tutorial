import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  public findCustomer() {
    return {
      id: 1,
      created_at: new Date(),
      email: 'my-email@gmail.com',
    };
  }
}
