const mongoose = require("mongoose");


const CompneySchema = new mongoose.Schema(
  {
    imagw: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: String, required: true }
  },
  {
    versionKey: false,
    timestamps: true,
  },

);

const AddCompney = mongoose.model("addCompney",CompneySchema)

module.exports= AddCompney