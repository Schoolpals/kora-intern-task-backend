
import {
    Column,
    DataType,
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
      type: DataType.ARRAY(DataType.STRING),
    })
    options!:string[]

    @Column
    answer!:number
  }
  
  export default Kora;
