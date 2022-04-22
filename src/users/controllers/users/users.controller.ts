import {
  Controller,
  Get,
  Post,
  Inject,
  Param,
  ParseIntPipe,
  UseFilters,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserDto } from 'src/users/dto/User.dto';
import { InvalidUserException } from 'src/users/exceptions/invalid-user.exception';
import { HttpExceptionFilter } from 'src/users/filters/HttpException.filter';
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

  @Get('username/:username')
  public getUserByName(@Param('username') username: string) {
    const user = this.service.getUserByName(username);
    if (user) {
      return user;
    }

    throw new InvalidUserException();
  }

  @UseFilters(HttpExceptionFilter)
  @Get('id/:id')
  public getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = this.service.getUserById(id);
    if (user) {
      return user;
    }

    throw new InvalidUserException();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  public createUser(@Body() user: UserDto) {
    return this.service.createUser(user);
  }
}
