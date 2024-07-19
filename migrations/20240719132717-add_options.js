'use strict';

module.exports = {
   async up (queryInterface, Sequelize){
    await queryInterface.addColumn('kora', 'options', {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: true,
      defaultValue: []
    });
  },

};