import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidUserException extends HttpException {
  public constructor(msg?: string, status?: HttpStatus) {
    super(msg ?? 'user not found', status ?? HttpStatus.BAD_REQUEST);
  }
}
