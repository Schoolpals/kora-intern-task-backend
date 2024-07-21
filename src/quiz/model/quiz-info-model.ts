import { DataTypes } from "sequelize";
import {
  AllowNull,
  BelongsTo,
  Column,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

@Table({ tableName: "quiz_info" })
class QuizInfo extends Model {
  @PrimaryKey
  @Column({
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  })
  quizId!: string;

  @AllowNull(true)
  @Column({
    type: DataTypes.INTEGER,
    defaultValue: 0,
  })
  score!: number;

}

export default QuizInfo;
