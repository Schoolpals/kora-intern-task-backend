import { Response } from "express";
export class Error404Response {
    static send(response: Response, data: any, message = "Not Found"){
      return response.status(404).json({
        success: false,
        message,
        data,
      });
    }
  }

export default Error404Response