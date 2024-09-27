import {AppError} from '@/utils/app-error.js';
import {Request, Response, NextFunction} from 'express';
import {isValidObjectId} from 'mongoose';

export function validateParamsId(req: Request, res: Response, next: NextFunction) {
  if (!isValidObjectId(req.params.id)) {
    throw new AppError(400, {
      message: 'Params validation failed',
      error: `${req.params.id} is not valid object id`
    });
  }

  return next();
}
