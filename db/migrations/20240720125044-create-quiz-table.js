'use strict';

module.exports = {
   async up (queryInterface, Sequelize){
    await queryInterface.createTable('quiz', {
      quizId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      score: {
        type: Sequelize.INTEGER,
        defaultValue: Sequelize.INTEGER,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

};

