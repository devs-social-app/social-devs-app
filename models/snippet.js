const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const snippetSchecma = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  desc: { type: String, required: true },
  lang: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Snippet = mongoose.model("Snippet", snippetSchecma);

module.exports = Snippet;
