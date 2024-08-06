import mongoose from "mongoose";

const donarSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobileNumber: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  amount: {
    type: String,
    required: true,
  },
  message:{
    type:String,
    required:true,
  }
});

export const Donar = mongoose.model("Donar", donarSchema);


