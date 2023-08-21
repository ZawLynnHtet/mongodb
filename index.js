const { default: mongoose } = require("mongoose");
const app = require("./app");

const uri = 'mongodb+srv://zawlynnhtet2002:<password>@mynote.n5sdnzk.mongodb.net/notes?retryWrites=true&w=majority';

mongoose.connect(uri.replace('<password>', process.env.DB_PASSWORD)).then((conn)=> {
  // console.log(conn);
  console.log("connect to db");
});

const port = 3200;

app.listen(port, "192.168.1.57",() => {
  console.log("Server is listening on port 3200");
});

