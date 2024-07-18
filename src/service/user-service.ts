import User from "../users/user-model";


export const findByUsername = async (username: string): Promise<User | null> => {
    const user = await User.findOne({
      where: { username },
    });
    return user;
  };

  export const findByUserId = async (userId: number): Promise<User | null> => {
    const user = await User.findOne({ where: { id: userId }});
    return user;
  };