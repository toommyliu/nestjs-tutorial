import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @MinLength(3)
  public username: string;

  @IsNotEmpty()
  @MinLength(10)
  public password: string;

  @IsNotEmpty()
  @IsEmail()
  public email: string;
}
