import BaseException from "./base-exception";

export class UnAuthorizedException extends BaseException {
  constructor(msg?: string) {
    const message = msg || "You are unauthorized to perform this request";
    super({ message, code: 401 });
  }
}

export class UnsupportedFileTypeException extends Error {
  constructor(msg: string) {
    super(msg);
  }
}
