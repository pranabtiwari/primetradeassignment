import Task from "../models/task.model.js";
import taskSchema from "../schemas/task.schema.js";

/**
 * CREATE TASK
 * POST /api/tasks
 */
const createTask = async (req, res) => {
  try {
    const parsed = taskSchema.createTaskSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        error: parsed.error.errors
      });
    }

    const task = await Task.create({
      ...parsed.data,
      userId: req.user.userId
    });

    return res.status(201).json(task);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

/**
 * READ ALL TASKS
 * GET /api/tasks
 */
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      userId: req.user.userId
    });

    return res.status(200).json(tasks);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

/**
 * READ SINGLE TASK
 * GET /api/tasks/:id
 */
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      userId: req.user.userId
    });

    if (!task) {
      return res.status(404).json({
        error: "Task not found"
      });
    }

    return res.status(200).json(task);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

/**
 * UPDATE TASK
 * PUT /api/tasks/:id
 */
const updateTask = async (req, res) => {
  try {
    const parsed = taskSchema.updateTaskSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        error: parsed.error.errors
      });
    }

    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      parsed.data,
      { new: true }
    );

    if (!task) {
      return res.status(404).json({
        error: "Task not found"
      });
    }

    return res.status(200).json(task);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

/**
 * DELETE TASK
 * DELETE /api/tasks/:id
 */
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId
    });

    if (!task) {
      return res.status(404).json({
        error: "Task not found"
      });
    }

    return res.status(200).json({
      message: "Task deleted successfully"
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export default {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask
};
