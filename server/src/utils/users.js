const { Users } = require("../db");

const find_by_email = async (email) => {
  try {
    const user = await Users.findAll({
      where: { email: email },
    });
  } catch (error) {
    console.log("Rompo en utilUser", error);
  }
};
module.exports = { find_by_email };
