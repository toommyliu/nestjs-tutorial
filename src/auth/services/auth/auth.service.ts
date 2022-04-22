import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Injectable()
export class AuthService {
  public constructor(
    @Inject('USER_SERVICE') private readonly service: UsersService,
  ) {}
  public async validateUser(username: string, password: string) {
    const user = await this.service.findUser(username);
    if (user?.password === password) {
      return user;
    }

    return null;
  }
}
