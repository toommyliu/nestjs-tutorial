import { Injectable } from '@nestjs/common';
import { Exclude, plainToInstance } from 'class-transformer';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'username',
      password: 'password',
    },
    {
      id: 2,
      username: 'abc',
      password: 'def',
    },
    {
      id: 3,
      username: 'xyz',
      password: '123',
    },
    {
      id: 4,
      username: 'user',
      password: 'pass',
    },
  ];

  public getUsers() {
    return this.users.map((u) => plainToInstance(SerializedUser, u));
  }

  public getUserByName(username: string) {
    return this.getUsers().find((u) => u.username === username);
  }

  public getUserById(id: number) {
    return this.getUsers().find((u) => u.id === id);
  }
}

export interface User {
  id: number;
  username: string;
  password: string;
}

export class SerializedUser {
  id: number;

  username: string;

  @Exclude()
  password: string;
}
