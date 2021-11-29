const users = require('./users.json');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    users.forEach((user) => {
      (user.createdAt = new Date()), (user.updatedAt = new Date());
    });
    await queryInterface.bulkInsert('users', users);
  },
};
