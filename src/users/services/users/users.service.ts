import { Injectable } from '@nestjs/common';
import { Exclude, plainToInstance } from 'class-transformer';
import { UserDto } from 'src/users/dto/User.dto';
import { User as UserEntity } from 'src/entities/User';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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

  public constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public getUsers() {
    return this.users.map((u) => plainToInstance(SerializedUser, u));
  }

  public getUserByName(username: string) {
    return this.getUsers().find((u) => u.username === username);
  }

  public getUserById(id: number) {
    return this.getUsers().find((u) => u.id === id);
  }

  public createUser(user: UserDto) {
    return this.userRepository.save(user);
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
