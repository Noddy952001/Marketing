const mongoose = require("mongoose");


const CompneySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: String, required: true },
    profile_pic: [{type:String}]

},
  {
    versionKey: false,
    timestamps: true,
  },

);

const AddCompney = mongoose.model("addCompney",CompneySchema)

module.exports= AddCompney