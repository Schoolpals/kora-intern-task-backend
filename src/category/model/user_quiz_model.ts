import { DataTypes } from "sequelize";
import {
  Column,
  Model,
  PrimaryKey,
  Table,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import UserQuiz from "./category_model";


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


  static associate(models: any) {
   UserQuiz.belongsTo(models.UserQuiz, { foreignKey: 'categoryId', as: 'category' });
}
}

export default UploadInfo;
