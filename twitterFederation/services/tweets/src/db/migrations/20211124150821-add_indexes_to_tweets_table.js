'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addIndex('tweets', ['userId']);
    await queryInterface.addIndex('tweets', ['text']);
  },
};
