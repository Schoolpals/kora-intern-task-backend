import {
    BeforeSave,
    Column,
    HasMany,
    IsEmail,
    Model,
    Table,
    Unique,
  } from "sequelize-typescript";


  @Table
  class User extends Model {
    @Column
    declare firstName: string;
  
    @Column
    declare lastName: string;
  
    @Unique
    @Column
    declare userName: string;

    @Unique
    @IsEmail
    @Column
    declare email: string;
  
    @Column
    declare password: string;


    @BeforeSave
    static async formatEmail(user: User) {
      if (user.email) {
        user.email = user.email.toLowerCase();
      }
    }
  }
  
  export default User;
  