const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    let users = await User.findAll();
    res.status(200).json({
      data: users,
      msg: "All users of table Users",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      msg: "something goes wrong",
    });
  }
};

const createUser = async (req, res) => {
  const { name } = req.body;
  try {
    let newUser = await User.create(
      {
        name,
      },
      {
        fields: ["name"],
      }
    );
    res.json({ data: newUser, msg: "user created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      msg: "something goes wrong",
    });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    let user = await User.findAll({
      where: {
        id: id,
      },
    });
    res.status(200).json({ data: user, msg: "User of table Users" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      msg: "something goes wrong",
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    let user = await User.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({ data: user, msg: "User deleted of table Users" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      msg: "something goes wrong",
    });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    let users = await User.findAll({
      attributes: ["name"],
      where: {
        id: id,
      },
    });
    if (users.length > 0) {
      users.forEach(async (u) => {
        await u.update(
          {
            name: name,
          },
          {
            fields: ["name"],
          }
        );
      });
      return res.status(200).json({ data: users, msg: "update successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      msg: "something goes wrong",
    });
  }
};

module.exports = {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
};
