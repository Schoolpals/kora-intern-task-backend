'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('quiz', 'score', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    });
  },
};