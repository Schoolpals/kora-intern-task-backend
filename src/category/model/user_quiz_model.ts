// import { DataTypes } from "sequelize";
// import {
//   Column,
//   Model,
//   PrimaryKey,
//   Table,
//   ForeignKey,
//   BelongsTo,
// } from "sequelize-typescript";
// import UserQuiz from "./category_model";


// @Table({ tableName: "upload_info" })
// class UploadInfo extends Model {
//   @PrimaryKey
//   @Column({
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//   })
//   id!: number;

//   @Column({ type: DataTypes.UUID })
//   quesId!: string;

//   @Column({
//     type: DataTypes.STRING,
//   })
//   question!: string;

//   @Column({
//     type: DataTypes.JSON,
//   })
//   options!: { option: string; isCorrect: boolean }[];

//   @Column({
//     type: DataTypes.INTEGER,
//   })
//   answer!: number;


//   @Column({
//     type: DataTypes.INTEGER,
//   })
//   userId!: number;

//   @ForeignKey(() => UserQuiz)
//   @Column({
//     type: DataTypes.UUID,
//   })
//   categoryId!: string;

//   @BelongsTo(() => UserQuiz,"categoryId")
//   category!: UserQuiz;

// }

// export default UploadInfo;
