import User from "../user-model";


export const findByUsername = async (userName: string): Promise<User | null> => {
    const user = await User.findOne({
      where: { userName },
    });
    return user;
  };

  export const findByUserId = async (userId: number): Promise<User | null> => {
    const user = await User.findOne({ where: { id: userId }});
    return user;
  };