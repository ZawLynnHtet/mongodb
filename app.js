const morgan = require("morgan");
const cors = require("cors");
const express = require("express");
const noteRouter = require("./routes/note_route");
const userRouter = require("./routes/user_route")
const dotenv = require('dotenv');
const app = express();
const mongo = require('mongoose');


dotenv.config({path: './config.env'});
console.log(process.env);

if(process.env.NODE_ENVIRONMENT == "development") {
    app.use(morgan('dev'));
    console.log("production");
}else {
    console.log("development");
}

app.use(express.json());
app.use(cors());


app.use("/api/v1/notes", noteRouter);
app.use("/registration", userRouter)

module.exports = app;