const router = require("express").Router();
const {
  getThoughts,
  createThought,
  getThoughtById,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

router.route("/").get(getThoughts).post(createThought);
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router
  .route("/:id/reactions/:reactionId")
  .post(addReaction)
  .delete(deleteReaction);

module.exports = router;
