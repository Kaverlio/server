const Router = require("express");
const reviewController = require("../controllers/review.controller");
const router = new Router();

router.post('/review', reviewController.createReview);
router.get('/review', reviewController.getReviewsByUser);
router.delete('/review/:id', reviewController.deleteReview);

module.exports = router;