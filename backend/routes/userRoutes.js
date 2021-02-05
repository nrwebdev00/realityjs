import express from 'express';
import {
    loginUser,
    registerUser,
    viewProfile,
    updateUser,
    viewAllUserAdmin,
    removeUserAdmin,
    viewUserAdmin,
    updateUserAdmin,
    newUserAdmin } from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'


const router = express.Router();

router.route('/newUser').post(protect, admin, newUserAdmin);
router.route('/login').post( loginUser );
router.route('/register').post( registerUser );
router.route('/profile').get(protect, viewProfile ).put(protect, updateUser);
router.route('/:role').get(protect, admin, viewAllUserAdmin); 
router.route('/single/:id')
    .get(protect, admin, viewUserAdmin)
    .delete(protect, admin, removeUserAdmin)
    .put(protect, admin, updateUserAdmin);

// router.route('a/:id')
//     .get(protect, admin, viewUserAdmin )
//     .delete(protect, admin, removeUserAdmin)
//     .put(protect, admin, updateUserAdmin);

export default router;

