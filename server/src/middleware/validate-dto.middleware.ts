import {Request, Response, NextFunction} from 'express';
import {ClassConstructor, plainToInstance} from 'class-transformer';
import {validate} from 'class-validator';
import {AppError} from '@/utils/app-error.js';

export function validateDto<T extends object>(dtoClass: ClassConstructor<T>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dtoInstance = plainToInstance(dtoClass, req.body);
    const errors = await validate(dtoInstance);

    if (errors.length > 0) {
      throw new AppError(400, {
        message: 'Body validation failed',
        errors: errors.map((err) => ({
          property: err.property,
          constraints: err.constraints
        }))
      });
    }

    return next();
  };
}
