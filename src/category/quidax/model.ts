import {  DataTypes, Model } from 'sequelize';
import sequelize from '../../startup/db';
import { Question } from './interface';

Question.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    question: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    options: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    answer: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'questions',
    sequelize,
});

export default Question;

