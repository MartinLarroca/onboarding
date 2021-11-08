const comments = require("./comments.json");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    comments.forEach((comment) => {
      (comment.createdAt = new Date()), (comment.updatedAt = new Date());
    });
    await queryInterface.bulkInsert("comments", comments);
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
