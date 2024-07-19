import User from "../../users/user-model";

export const findByEmail = async (email: string): Promise<User | null> => {
    const user = await User.findOne({
      where: { email },
    });
    return user;
  };

  export const findByUserId = async (userId: number): Promise<User | null> => {
    const user = await User.findOne({ where: { id: userId }});
    return user;
  };