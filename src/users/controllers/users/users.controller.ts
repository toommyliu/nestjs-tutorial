import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
} from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  public constructor(
    @Inject('USER_SERVICE') private readonly service: UsersService,
  ) {}

  @Get()
  public getUsers() {
    return this.service.getUsers();
  }

  @Get('/:username')
  public getUserByName(@Param('username') username: string) {
    const user = this.getUsers().find((u) => u.username === username);
    if (user) {
      return user;
    }

    throw new HttpException('user not found', HttpStatus.BAD_REQUEST);
  }
}
