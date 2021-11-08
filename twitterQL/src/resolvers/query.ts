import User from "../models/user";

export default {
  users: async () => {
    console.log(User);
    console.log("saassasasasa");
    try {
      const users = await User.findAll({ raw: true });
      users.forEach((user) => {
        console.log(user.createdAt);
      });
      return users;
    } catch (err) {
      console.log(err);
      console.log("Sasdadsdsads");
    }
  },
};
