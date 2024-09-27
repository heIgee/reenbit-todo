import {Request, Response, NextFunction} from 'express';
import {inProduction} from '@/config/global.config.js';
import {AppError} from '@/utils/app-error.js';

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): Response {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json(err.toJSON({includeStack: !inProduction}));
  }

  if (err instanceof Error) {
    console.error('Unwrapped error:', err);
    return res.status(500).send({
      message: err.message,
      name: err.name,
      stack: inProduction ? undefined : err.stack
    });
  }

  console.error('Unknown error:', err);
  return res.status(500).send(err);
}
