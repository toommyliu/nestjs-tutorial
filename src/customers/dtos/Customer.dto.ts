import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  ValidateNested,
} from 'class-validator';
import { AddressDto } from './Address.dto';

export class CustomerDto {
  @IsNumberString()
  public id: number;

  @IsEmail()
  public email: string;

  @IsNotEmpty()
  public name: string;

  @ValidateNested()
  @Type(() => AddressDto)
  @IsNotEmpty()
  public address: AddressDto;
}
