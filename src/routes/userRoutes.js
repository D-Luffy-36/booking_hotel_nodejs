import express from 'express';
import { UserController } from '../controllers/userController.js';

const router = express.Router();

// GET /api/users → lấy danh sách người dùng
router.get('/', UserController.getUsers);

// POST /api/users → tạo người dùng mới
router.post('/', UserController.createUser);

// (Tuỳ chọn) GET /api/users/:id → lấy chi tiết người dùng
router.get('/:id', UserController.getUserById);

// (Tuỳ chọn) PUT /api/users/:id → cập nhật người dùng
router.put('/:id', UserController.updateUser);

// (Tuỳ chọn) DELETE /api/users/:id → xoá người dùng
router.delete('/:id', UserController.deleteUser);

export default router;
