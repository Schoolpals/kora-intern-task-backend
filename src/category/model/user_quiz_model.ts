import { DataTypes } from 'sequelize';
import {
  Column,
  Model,
  PrimaryKey,
  Table,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import User from '../../users/user-model';
import Category from '../model/category_model';

@Table({ tableName: "quidax_info" })
class QuidaxInfo extends Model {
  @PrimaryKey
  @Column({
    type: DataTypes.INTEGER,
    autoIncrement: true
  })
  id!: number;

  @Column
  quesId!: number

  @Column({
    type: DataTypes.STRING
  })
  question!: string;

  @Column({
    type: DataTypes.JSON
  })
  options!: { option: string; isCorrect: boolean }[]

  @Column({
    type: DataTypes.INTEGER
  })
  answer!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataTypes.INTEGER,
    allowNull: false
  })
  userId!: number;

  @BelongsTo(() => User)
  user!: User;

  @ForeignKey(() => Category)
  @Column({
    type: DataTypes.UUID,
    allowNull: false
  })
  categoryId!: string;

  @BelongsTo(() => Category)
  category!: Category;
}

export default QuidaxInfo;
