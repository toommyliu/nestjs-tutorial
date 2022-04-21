import { IsNotEmpty } from 'class-validator';
export class AddressDto {
  @IsNotEmpty()
  public line1: string;
  public line2?: string;

  @IsNotEmpty()
  public zip: string;

  @IsNotEmpty()
  public city: string;

  @IsNotEmpty()
  public state: string;
}
