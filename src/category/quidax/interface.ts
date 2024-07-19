import { Model } from "sequelize-typescript";

export class Question extends Model {
  public id!: number;
  public question!: string;
  public options!: string[];
  public answer!: number;
}
  