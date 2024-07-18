import {
  Table,
  Column,
  Model,
  Unique,
  PrimaryKey,
  DataType,
} from "sequelize-typescript";

@Table
class Token extends Model {
 
  @Column
  username!: string;

  @PrimaryKey
  @Unique
  @Column({ defaultValue: DataType.UUIDV4 })
  token!: string;

  @Column
  expiresAt!: Date;
}

export default Token;
