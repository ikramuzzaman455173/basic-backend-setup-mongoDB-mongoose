//init code
const mongoose = require("mongoose");

//user schema
const dataSchema = new mongoose.Schema(
  {
    pin_name: {
      type: String,
    },
    status: {
      type: Boolean,
    },
    response_from_iot: {
      type: Boolean,
    },
  },
  { timestamps: true }
);


//module exports
// module.exports = mongoose.model("data",dataSchema);
export default mongoose.model("data",dataSchema)
