import { Response } from "express";

class SuccessResponse {
  static send(response: Response, data: any, message = "Success"){
   return response.status(200).json({
      success: true,
      message,
      data,
    });
  }
}

export default SuccessResponse 