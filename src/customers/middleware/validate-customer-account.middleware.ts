import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerAccount implements NestMiddleware {
  public use(req: Request, res: Response, next: NextFunction) {
    const { valid_account } = req.headers;
    console.log('validate customer account');
    if (valid_account) {
      next();
      return;
    }

    return res
      .status(HttpStatus.UNAUTHORIZED)
      .send({ error: 'account is invalid' });
  }
}
