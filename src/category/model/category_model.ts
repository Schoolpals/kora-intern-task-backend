import { DataTypes } from "sequelize";
import {
    Column,
    Model,
    PrimaryKey,
    Table,
    ForeignKey,
    BelongsTo,
    HasMany,
} from "sequelize-typescript";

import User from "../../users/user-model";
// import UploadInfo from "./user_quiz_model";



@Table({ tableName: "user_quizzes" })
class UserQuiz extends Model {
  @PrimaryKey
  @Column({
    type: DataTypes.INTEGER,
    autoIncrement: true,
  })
  id!: number;

  @ForeignKey(() => User)
  @Column
  userId!: number;

  @Column
  categoryName!: string;

  @Column
  categoryId!: string;

 
  @Column({
    defaultValue: DataTypes.UUIDV4 
  })
  quizId!: string;

  @BelongsTo(() => User,"userId")
  user!: User;

  // @HasMany(() => UploadInfo , "categoryId")
  // userQuizzes!: UploadInfo[];

}

export default UserQuiz;
