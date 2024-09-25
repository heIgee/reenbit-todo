import {ClassConstructor, plainToInstance} from 'class-transformer';
import {validate} from 'class-validator';
import {Request, Response, NextFunction} from 'express';

export function validateDto<T extends object>(dtoClass: ClassConstructor<T>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dtoInstance = plainToInstance(dtoClass, req.body);
    const errors = await validate(dtoInstance);

    if (errors.length > 0) {
      return res.status(400).json({
        message: 'Validation failed',
        statusCode: 400,
        errors: errors.map((err) => ({
          property: err.property,
          constraints: err.constraints
        }))
      });
    }

    return next();
  };
}
