'use strict';

module.exports = {
  async up (queryInterface, Sequelize)  {
    await queryInterface.createTable('kora', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
      },
      quesId:{
type:Sequelize.INTEGER,
allowNull: true,
      },
      question: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      options: {
        type: Sequelize.JSONB(Sequelize.STRING),
        allowNull: true,
      },
      answer: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('kora');
  }
};