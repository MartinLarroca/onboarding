'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addIndex('comments', ['userId']);
    await queryInterface.addIndex('comments', ['tweetId']);
    await queryInterface.addIndex('comments', ['comment']);
  },
};
