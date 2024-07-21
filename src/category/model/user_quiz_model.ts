import { DataTypes } from "sequelize";
import {
  Column,
  Model,
  PrimaryKey,
  Table,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import User from "../../users/user-model";
import UserQuiz from "../model/category_model";

@Table({ tableName: "upload_info" })
class UploadInfo extends Model {
  @PrimaryKey
  @Column({
    type: DataTypes.INTEGER,
    autoIncrement: true,
  })
  id!: number;

  @Column({ type: DataTypes.UUID, allowNull: false })
  quesId!: number;

  @Column({
    type: DataTypes.STRING,
  })
  question!: string;

  @Column({
    type: DataTypes.JSON,
  })
  options!: { option: string; isCorrect: boolean }[];

  @Column({
    type: DataTypes.INTEGER,
  })
  answer!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
  })
  userId!: number;

  @ForeignKey(() => UserQuiz)
  @Column({
    type: DataTypes.UUID,
    allowNull: false,
  })
  categoryId!: string;

  @BelongsTo(() => User)
  user!: User;

  @BelongsTo(() => UserQuiz)
  category!: UserQuiz;
}

export default UploadInfo;
