import { DataTypes } from "sequelize";
import {
    Column,
    Model,
    PrimaryKey,
    Table,
    ForeignKey,
    BelongsTo
} from "sequelize-typescript";

import User from "../../users/user-model"
import Quiz from '../../quiz/model/quiz-info-model';

@Table({ tableName: "user_quizzes" })
class UserQuiz extends Model {
    @PrimaryKey
    @Column({
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    })
    id!: number;

    @ForeignKey(() => User)
    @Column({
        type: DataTypes.INTEGER,
        allowNull: false
    })
    userId!: number;

    @Column({
        type: DataTypes.STRING,
        allowNull: false
    })
    category!: string;

    @Column({
        type: DataTypes.STRING,
        allowNull: false
    })
    quizLink!: string;

    @ForeignKey(() => Quiz)
    @Column({
        type: DataTypes.UUID,
        allowNull: false
    })
    quizId!: string;

    @BelongsTo(() => User)
    user!: User;

    @BelongsTo(() => Quiz)
    quiz!: Quiz;
}

export default UserQuiz;


