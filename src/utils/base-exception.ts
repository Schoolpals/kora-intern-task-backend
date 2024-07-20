import { BaseExceptionType } from "./types";


class BaseException {
  public readonly code;
  public readonly error;
  public readonly message;

  constructor(ex: BaseExceptionType) {
    const { message, code, error } = ex;

    this.code = code;
    this.message = message;
    this.error = error;
  }
}

export default BaseException;
