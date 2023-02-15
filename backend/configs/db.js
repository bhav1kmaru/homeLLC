const mongoose = require('mongoose')
mongoose.set("strictQuery", false);

const connection = mongoose.connect(
  `mongodb+srv://bhavik:bhavik@cluster0.2ikjbvo.mongodb.net/homellc?retryWrites=true&w=majority`
);

module.exports ={connection}