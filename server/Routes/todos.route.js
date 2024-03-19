import express from "express";
import Todo from "../Models/Todo.js";

const todoRoute = express.Router();

// fetch all todos
todoRoute.route("/").get(async (req, res, next) => {
  try {
    const todos = await Todo.find({});
    return res.status(200).json(todos);
  } catch (err) {
    next(err);
  }
});

// create new todo
todoRoute.route("/").post(async (req, res, next) => {
  try {
    const newTodo = new Todo({
      title: req.body.title,
      description: req.body.description,
      status: 0,
      priority: req.body.priority || 3,
      added_on: new Date(),
    });

    if (req.body.deadline) newTodo.deadline = new Date(req.body.deadline);

    const savedTodo = await newTodo.save({ returnOriginal: false });

    return res.status(201).json({ message: "todo added.", todo: savedTodo });
  } catch (err) {
    next(err);
  }
});

// update todo status (0: pending, 1: completed)
todoRoute.route("/:id").patch(async (req, res, next) => {
  try {
    const response = await Todo.updateOne({ _id: req.params.id }, req.body);

    if (!response.matchedCount)
      return res.status(404).json({ message: "Todo not found." });
    return res.status(201).json({ message: "Todo updated." });
  } catch (err) {
    next(err);
  }
});

// delete todo
todoRoute.route("/:id").delete(async (req, res, next) => {
  try {
    const response = await Todo.deleteOne({ _id: req.params.id });
    if (!response.deletedCount)
      return res.status(404).json({ message: "todo not found." });
    return res.status(201).json({ message: "todo deleted." });
  } catch (err) {
    next(err);
  }
});

export default todoRoute;
