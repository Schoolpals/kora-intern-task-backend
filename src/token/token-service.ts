import { Op } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import Token from "./model/token-model";

const TOKEN_EXPIRATION = 120 * 60 * 1000; 
export async function generateToken(username: string): Promise<string> {
  const expiresAt = new Date(Date.now() + TOKEN_EXPIRATION);
  const userExist = await Token.findOne({ where: { username } });
  if (userExist) {
    await Token.destroy({ where: { username } });
  }

  const token = uuidv4();

  await Token.create({ username, token, expiresAt });

  return token;
}

export const findUserToken = async (token: string): Promise<Token | null> => {
  const user = await Token.findOne({
    where: {
      token,
      expiresAt: {
        [Op.gt]: Date.now(),
      },
    },
  });
  return user;
};
