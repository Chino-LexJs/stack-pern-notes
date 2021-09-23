const Note = require("../models/Note");

const getNotes = async (req, res) => {
  try {
    let notes = await Note.findAll();
    res.status(200).json({
      data: notes,
      msg: "All notes of table Notes",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      msg: "something goes wrong",
    });
  }
};

const createNote = async (req, res) => {
  const { title, content, users_id } = req.body;
  try {
    let newNote = await Note.create(
      {
        title,
        content,
        users_id,
      },
      {
        fields: ["title", "content", "users_id"],
      }
    );
    res.json({ data: newNote, msg: "note created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      msg: "something goes wrong",
    });
  }
};

const getNote = async (req, res) => {
  const { id } = req.params;
  try {
    let note = await Note.findAll({
      where: {
        id: id,
      },
    });
    res
      .status(200)
      .json({ data: note, msg: `Note: ${note[0].title} of table Notes` });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      msg: "something goes wrong",
    });
  }
};

const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    let note = await Note.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({ data: note, msg: "Note deleted of table Notes" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      msg: "something goes wrong",
    });
  }
};

const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content, users_id} = req.body;
  try {
    let notes = await Note.findAll({
      attributes: ["title", "content", "users_id"],
      where: {
        id: id,
      },
    });
    if (notes.length > 0) {
      notes.forEach(async (n) => {
        await n.update(
          {
            id: id,
            title: title,
            content: content,
            users_id: users_id
          },
          {
            fields: ["id","title", "content", "users_id"],
          }
        );
      });
      return res.status(200).json({ data: notes, msg: "update successfully" });
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
  getNotes,
  createNote,
  getNote,
  deleteNote,
  updateNote,
};
