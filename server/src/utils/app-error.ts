export class AppError extends Error {
  [key: string]: any;

  constructor(public statusCode: number, message: string | {message: string; [key: string]: any}) {
    super(typeof message === 'string' ? message : message.message);

    if (typeof message === 'object') {
      Object.entries(message).forEach(([key, value]) => {
        this[key] = value;
      });
    }

    this.name = this.constructor.name;
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  public toJSON({includeStack = false}): Record<string, any> {
    const result: Record<string, any> = {
      statusCode: this.statusCode,
      message: this.message
    };

    Object.entries(this).forEach(([key, value]) => {
      if (!['statusCode', 'message', 'name', 'stack'].includes(key)) {
        result[key] = value;
      }
    });

    if (includeStack) {
      result.stack = this.stack;
    }

    return result;
  }
}
