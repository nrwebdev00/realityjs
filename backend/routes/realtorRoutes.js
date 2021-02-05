import express from 'express';
import {
    createRealtor,
    getAllRealtors,
    getSingleRealtor,
    removeRealtor,
    updateRealtor
} from '../controllers/realtorController.js';
import { protect, admin, staff } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getAllRealtors).post(protect, admin, createRealtor)
router,route('/:id').get(getSingleRealtor).put(protect, updateRealtor).delete(protect, admin, removeRealtor);

export default router;