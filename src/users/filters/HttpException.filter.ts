import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  public catch(exception: HttpException, host: ArgumentsHost) {
    console.log(exception.getResponse());
    console.log(exception);

    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();

    res.send({
      status: exception.getStatus(),
      message: exception.getResponse(),
    });
  }
}
