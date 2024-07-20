import { DataTypes } from "sequelize";
import {
  AllowNull,
    Column,
    Model,
    Table,

  } from "sequelize-typescript";

  
  @Table({ tableName: "quiz_info" })
  class QuizInfo extends Model {
    @Column({ defaultValue: DataTypes.UUIDV4 })
    quizId!: string;


   @AllowNull(true)
    @Column({ defaultValue: DataTypes.INTEGER })
    score!:number

  }
  
  export default QuizInfo;
  