const Note = require("../models/note_model");
const APIFeatures = require("../api/api_features");

exports.getOneNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    res.status(200).json({
      message: "success",
      data: {
        note,
      },
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      message: error,
    });
  }
};

exports.getNotes = async (req, res) => {
  try {

    const features = new APIFeatures(Note.find(), req.query)
      .Filter()
      .Sort()
      .Select()
      .Paginate();
    const notes = await features.query;

    res.status(200).json({
      status: "success",
      requestAt: req.requestTime,
      data: notes.length,
      notes
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

exports.getNotesValue = async (req, res) => {
  try {
    const note = await Note.find({ rating: req.body.rating });
    res.status(200).json({
      status: "success",
      requestAt: req.requestTime,
      note
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

exports.postNewNote = async (req, res) => {
  try {
    const newNote = await Note.create(req.body);

    if (newNote) {
      res.status(201).json({
        status: "success",
        message: "success",
        data: {
          newNote,
        },
      });
    }
  } catch (error) {
    return res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

exports.updateOneNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      message: "success",
      data: {
        note,
      },
    });
  } catch (e) {
    res.status(401).json({
      status: "fail",
      message: e,
    });
  }
};

exports.updateNoteOneValue = async (req, res) => {
  try {
    const note = await Note.findOneAndUpdate(
      { title: req.body.title },
      { content: req.body.content }
    );

    res.status(200).json({
      message: "success",
      data: {
        note,
      },
    });
  } catch (e) {
    res.status(401).json({
      status: "fail",
      message: e,
    });
  }
};

exports.deleteOneNote = async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({ _id: req.params.id });

    res.status(200).json({
      message: "success",
      data: null,
    });
  } catch (e) {
    res.status(401).json({
      status: "fail",
      message: e,
    });
  }
};
