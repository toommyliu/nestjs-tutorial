import { Injectable } from '@nestjs/common';
import { Exclude, plainToInstance } from 'class-transformer';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'username',
      password: 'password',
    },
    {
      username: 'abc',
      password: 'def',
    },
    {
      username: 'xyz',
      password: '123',
    },
    {
      username: 'user',
      password: 'pass',
    },
  ];

  public getUsers() {
    return this.users.map((u) => plainToInstance(SerializedUser, u));
  }

  public getUserByName(username: string) {
    return this.users.find((u) => u.username === username);
  }
}

export interface User {
  username: string;
  password: string;
}

export class SerializedUser {
  username: string;

  @Exclude()
  password: string;
}
