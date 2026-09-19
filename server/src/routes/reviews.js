import { Router } from 'express';
import {
  getAllReviews,
  getReview,
  getCourseSummary,
  createReview,
  updateReview,
  deleteReview
} from '../controllers/reviewController.js';

const router = Router();

// TODO: wire up the routes described in README.md section 3.
router.get('/summary', getCourseSummary);
router.get('/', getAllReviews);
router.get('/:id', getReview);

router.post('/', createReview);

router.put('/:id', updateReview);

router.delete('/:id', deleteReview);

export default router;
