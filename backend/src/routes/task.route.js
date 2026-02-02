import { Router} from "express"
import authMiddleware from "../middlewares/auth.middleware.js"
import  taskController from "../controllers/task.controller.js"

const router = Router()

router.post("/", authMiddleware, taskController.createTask);
router.get("/", authMiddleware, taskController.getTasks);
router.get("/:id", authMiddleware, taskController.getTaskById);
router.put("/:id", authMiddleware, taskController.updateTask);
router.delete("/:id", authMiddleware, taskController.deleteTask);

export default router;