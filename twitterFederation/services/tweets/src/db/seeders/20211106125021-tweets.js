const tweets = require('./tweets.json');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    tweets.forEach((tweet) => {
      (tweet.createdAt = new Date()), (tweet.updatedAt = new Date());
    });
    await queryInterface.bulkInsert('tweets', tweets);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
