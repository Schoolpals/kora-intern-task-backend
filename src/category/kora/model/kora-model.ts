import { DataTypes } from 'sequelize';
import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({ tableName: 'kora' })
class Kora extends Model {
  @PrimaryKey
  @Column({
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  })
  id!: number;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  question!: string;

  @Column({
    type: DataTypes.JSON,
    allowNull: false,
  })
  options!: { option: string; isCorrect: boolean }[];

  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
  })
  answer!: number;

  @Column({
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  })
  createdAt!: Date;

  @Column({
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  })
  updatedAt!: Date;
}

export default Kora;

