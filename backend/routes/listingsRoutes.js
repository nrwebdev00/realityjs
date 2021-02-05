import express from 'express';
import { 
    createNewListing,
    getAllListings,
    getSingleListing,
    removeListing,
    updateListing
} from '../controllers/listingController.js';
import { protect, admin, staff } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getAllListings).post(protect, staff, createNewListing);
router.route('/:id').get(getSingleListing).put(protect, staff, updateListing).delete(protect, admin, removeListing)

export default router;