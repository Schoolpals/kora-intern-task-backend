import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { findByEmail } from "../auth/service/user-service";
import _ from "lodash";
import { validateUser } from "../users/user-validator";
import SuccessResponse from "../utils/success-response";
import ErrorResponse from "../utils/error-response";
import User from "../users/user-model";
import { generateToken } from "../token/token-service";
import { findByUsername } from "../users/service/user-service";

export const signUp = async (req: Request, res: Response): Promise<void> => {
  let { email, password,userName } = req.body;
  const validate = validateUser(req.body);

  if (validate.error) {
    ErrorResponse.send(res, { error: validate.error.details[0].message });
    return;
  }
  const user = await findByEmail(email);
  if (user) {
    ErrorResponse.send(res, { error: "User already Exists. Sign In instead." });
    return;
  }
  const username = await findByUsername(userName);
  if (username) {
    ErrorResponse.send(res, { error: "UserName already Exists." });
    return;
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const data = { ...validate.value, password: hashedPassword };
  const newUser = await User.create({...data,isVerified:true});
  const token = await generateToken(userName)
  const withoutPassword = _.pick(newUser, ["userName","email"]);
  SuccessResponse.send(res, { data: { ...withoutPassword, token}});
};
