import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TodoSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    status: { type: Number },
    added_on: {
      type: Date,
    },
    completed_on: {
      type: Date,
    },
    priority: {
      type: Number,
    },
    deadline: {
      type: Date,
    },
  },
  { collection: "todos" }
);
export default mongoose.model("Todo", TodoSchema);
