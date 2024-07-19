import { findByUsername } from './../../service/user-service';
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import _ from "lodash";
import { generateToken } from "../../token/token-service";
import SuccessResponse from '../../utils/success-response';
import { validateLoginInfo } from '../validators/sign-in-validator';


export const signIn = async (req: Request, res: Response) => {
    const validation = validateLoginInfo(req.body);
    if (validation.error) {
      res.status(400).json({ error: validation.error.details[0].message });
      return;
    }
    const { userName, password } = validation.value
  
    const user = await findByUsername(userName);
    if (!user) {
      return res.status(400).send({ error: "Username or Password Incorrect" });
    }
  
    const hashedPassword = user.password;
    const isPasswordValid = await bcrypt.compare(password, hashedPassword);
  
    if (!isPasswordValid) {
      return res.status(400).send({ error: "Email or Password Incorrect" });
    }
    const accessToken = generateToken(userName);
    const withoutPassword = _.pick(user, ["firstName", "lastName", "email"]);
    SuccessResponse.send(res, { accessToken, user: withoutPassword });
  };