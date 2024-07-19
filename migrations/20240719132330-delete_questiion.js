'use strict';

module.exports = {
   async up (queryInterface, Sequelize)  {
    await queryInterface.removeColumn('kora', 'questiion');
    await queryInterface.removeColumn('kora','option')
  }
};