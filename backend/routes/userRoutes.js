import express from 'express';
import {
    loginUser,
    registerUser,
    viewProfile,
    updateUser,
    viewAllUserAdmin,
    removeUserAdmin,
    viewUserAdmin,
    updateUserAdmin } from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'


const router = express.Router();

router.route('/login').post( loginUser );
router.route('/register').post( registerUser );
router.route('/profile').get(protect, viewProfile ).put(protect, updateUser);
// router.route('/:role').get(protect, admin, viewAllUserAdmin); route not working
router.route('/:id')
    // .get(protect, admin, viewUserAdmin ) route not working
    .delete(protect, admin, removeUserAdmin)
    .put(protect, admin, updateUserAdmin);

export default router;

