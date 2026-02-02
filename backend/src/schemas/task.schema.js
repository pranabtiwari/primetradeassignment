import { z } from "zod";

const createTaskSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters long"),

  description: z
    .string()
    .optional(),

  status: z
    .enum(["pending", "in-progress", "completed"])
    .optional()
});

const updateTaskSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters long")
    .optional(),

  description: z
    .string()
    .optional(),

  status: z
    .enum(["pending", "in-progress", "completed"])
    .optional()
});

export default {
    createTaskSchema,
    updateTaskSchema
}