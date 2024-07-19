'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('kora', 'option', 'options');
    await queryInterface.renameColumn('kora', 'questiion', 'question');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn('kora', 'options', 'option');
    await queryInterface.renameColumn('kora', 'question', 'questiion');
  }
};