import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  public constructor(
    @Inject('AUTH_SERVICE') private readonly service: AuthService,
  ) {
    super({
      usernameField: 'email',
    });
  }

  public async validate(username: string, password: string) {
    const user = await this.service.validateUser(username, password);
    if (user) {
      return user;
    }

    throw new UnauthorizedException();
  }
}
