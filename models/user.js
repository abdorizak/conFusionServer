const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const User = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  admin: {
    type: String,
    default: false,
  },
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", User);
