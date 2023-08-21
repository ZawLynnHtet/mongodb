const express = require("express");
const noteCtrl = require("../controller/note_ctrl");

const noteRouter = express.Router();

noteRouter.route("/").get(noteCtrl.getNotes).post(noteCtrl.postNewNote).post(noteCtrl.updateNoteOneValue);
noteRouter
  .route("/:id")
  .get(noteCtrl.getOneNote)
  .patch(noteCtrl.updateOneNote)
  .delete(noteCtrl.deleteOneNote);


module.exports = noteRouter;
