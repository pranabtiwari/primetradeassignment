import express from 'express';
import authMiddleware from '../middlewares/auth.middleware.js';
import userController from '../controllers/user.controller.js';

const router = express.Router();

router.get('/',authMiddleware , userController.getProfile)
router.put('/',authMiddleware , userController.updateProfile)
router.get("/me", authMiddleware, (req, res) => {
  res.status(200).json({
    user: {
      userId: req.user.userId,
      username: req.user.username,
    },
  });
});

export default router;