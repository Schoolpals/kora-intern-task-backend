import {
  Table,
  Column,
  Model,
  Unique,
  PrimaryKey,
  DataType,
} from "sequelize-typescript";

@Table({ tableName: "token" })
class Token extends Model {
 
  @Column
  userName!: string;

  @PrimaryKey
  @Unique
  @Column({ defaultValue: DataType.UUIDV4 })
  token!: string;

  @Column
  expiresAt!: Date;
}

export default Token;
