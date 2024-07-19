'use strict';

module.exports = {
   async up (queryInterface, Sequelize){
    await queryInterface.addColumn('kora', 'quesId', {
    type:Sequelize.INTEGER,
      allowNull: true,
    });
  },

};