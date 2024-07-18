import { Response } from "express";
export class ErrorResponse {
    static send(response: Response, data: any, message = "Failed"){
      return response.status(400).json({
        success: false,
        message,
        data,
      });
    }
  }

export default ErrorResponse
