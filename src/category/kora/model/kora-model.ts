import { DataTypes } from "sequelize";
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
    questiion!:string;

    @Column({
        type: DataTypes.ARRAY(DataTypes.TEXT),
      })
    option!:string

    @Column
    answer!:number
  }
  
  export default Kora;
