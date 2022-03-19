const mongoose = require("mongoose");

const HeroSchema = new mongoose.Schema({
  superHero: {
    type: String,
    required: [true, "Please give a name"],
    unique: true,
  },
  realname: {
    type: String,
    required: true,
    maxlength: [200, "Real name is too long"],
  },
});

module.exports = mongoose.models.Hero || mongoose.models("Hero", HeroSchema);