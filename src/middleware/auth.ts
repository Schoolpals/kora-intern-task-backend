
import { findByUsername } from './../service/user-service';
import { Response, NextFunction, Request } from "express";
import dotenv from "dotenv";
import { UserAttributes } from "../utils/types";
import { findUserToken } from "../token/token-service";
import { UnAuthorizedException } from "../utils/unauthorized.exception";


dotenv.config();

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { authorization } = req.headers;
  if (!authorization) throw new UnAuthorizedException("No authorization token");

  const accessToken = authorization.split(" ")[1];
  if (!accessToken)
    throw new UnAuthorizedException("No authorization token provided");

  const userToken = await findUserToken(accessToken);
  if (!userToken) throw new UnAuthorizedException("Invalid token");

  const userName = userToken.userName;

  const user = await findByUsername(userName);
  if (!user) throw new UnAuthorizedException("Invalid token");

  req.user = user as UserAttributes;
  next();
};
