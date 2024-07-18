import { DataTypes } from "sequelize";
import {
    Column,
    Model,
    Table,

  } from "sequelize-typescript";

  
  @Table({ tableName: "quiz" })
  class Quiz extends Model {
    @Column({ defaultValue: DataTypes.UUIDV4 })
    quizId!: string;
  
  }
  
  export default Quiz;
  