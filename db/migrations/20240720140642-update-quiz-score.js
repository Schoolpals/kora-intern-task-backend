'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('quiz', 'score', {

    await queryInterface.changeColumn('quiz_info', 'score', {

      type: Sequelize.INTEGER,
      allowNull: true, // Set allowNull to true
    });
  },

};