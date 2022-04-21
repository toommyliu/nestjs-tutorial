import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomer implements NestMiddleware {
  public use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) {
      return res
        .status(HttpStatus.FORBIDDEN)
        .send({ error: 'no authorization token provided' });
    }

    if (authorization === '123') {
      next();
      return;
    }

    return res
      .status(HttpStatus.FORBIDDEN)
      .send({ error: 'invalid authorization token provided' });
  }
}
