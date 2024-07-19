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
    @Column
    id!:number;
  
   @Column
   quesId!:number

    @Column
    question!:string;

    @Column({
      type: DataTypes.JSONB,
    })
    options!:string[]

    @Column
    answer!:number
  }
  
  export default Kora;
