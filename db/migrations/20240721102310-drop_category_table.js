'use strict';

module.exports = {
   async up (queryInterface, Sequelize) {
    await queryInterface.dropTable('user_quizzes');
  },

};