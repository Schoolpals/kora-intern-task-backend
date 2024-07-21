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


@Table({ tableName: "user_quizzes" })
class UserQuiz extends Model {
  @PrimaryKey
  @Column({
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  })
  categoryId!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataTypes.INTEGER,
  })
  userId!: number;

  @Column({
    type: DataTypes.STRING,
  })
  categoryName!: string;

  @Column({
    defaultValue: DataTypes.UUIDV4 
  })
  quizId!: string;

  @BelongsTo(() => User,"userId")
  user!: User;

  // @HasMany(() => UploadInfo)
  // userUpload!: UploadInfo[];

}

export default UserQuiz;



