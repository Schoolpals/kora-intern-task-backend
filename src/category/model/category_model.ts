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

import UploadInfo from "./user_quiz_model";

@Table({ tableName: "user_quizzes" })
class UserQuiz extends Model {
  @PrimaryKey
  @Column({
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  })
  id!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
  })
  userId!: number;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  categoryName!: string;

  @Column({
    type: DataTypes.UUID,
    allowNull: false,
  })
  categoryId!: string;

 
  @Column({
    type: DataTypes.UUID,
    allowNull: false,
  })
  quizId!: string;

  @BelongsTo(() => User)
  user!: User;

  @HasMany(() => UploadInfo)
  userUpload!: UploadInfo[];



}

export default UserQuiz;
