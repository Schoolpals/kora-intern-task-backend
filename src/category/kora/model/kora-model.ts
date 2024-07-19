import { DataTypes } from 'sequelize';

import {
    Column,
    Model,
    PrimaryKey,
    Table,

  } from "sequelize-typescript";

  
  @Table({ tableName: "kora" })
  class Kora extends Model {
    @PrimaryKey
    @Column({
      type: DataTypes.INTEGER,
      autoIncrement: true
    })
    id!: number;
  
   @Column
   quesId!:number

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
  }
  
  export default Kora;

