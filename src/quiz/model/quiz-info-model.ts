import { DataTypes } from "sequelize";
import {
  AllowNull,
    Column,
    Model,
    PrimaryKey,
    Table,

  } from "sequelize-typescript";

  
  @Table({ tableName: "quiz_info" })
  class QuizInfo extends Model {
    @PrimaryKey
    @Column({
      type: DataTypes.INTEGER,
      autoIncrement: true
    })
    id!: number;

    @Column({ defaultValue: DataTypes.UUIDV4 })
    quizId!: string;


   @AllowNull(true)
    @Column({ defaultValue: DataTypes.INTEGER })
    score!:number

  }
  
  export default QuizInfo;
  