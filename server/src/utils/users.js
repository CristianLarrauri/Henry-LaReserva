const { Users } = require("../db");
const preAdmin = require("../json/preAdmin.json");

const preload_admin = async () => {
  try {
    let data = preAdmin.map((admin) => {
      return {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        img: admin.img,
        admin: admin.admin,
        ban: admin.ban,
      };
    });

    for (const player of data) {
      create_admin(player);
    }

    return data;
  } catch (error) {
    console.log("ERROR EN preload_admin", error);
  }
};

const create_admin = async (data) => {
  const { id, name, email, img, admin, ban } = data;
  try {
    let new_admin = await Users.create({
      id,
      name,
      email,
      img,
      admin,
      ban,
    });

    return new_admin;
  } catch (error) {
    console.log("ERROR EN CREATE_PLAYER", error);
  }
};

const find_by_email = async (email) => {
  try {
    const user = await Users.findAll({
      where: { email: email },
    });
  } catch (error) {
    console.log("Rompo en utilUser", error);
  }
};
module.exports = { find_by_email, preload_admin, create_admin };
