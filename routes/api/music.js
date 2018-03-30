const router = require("express").Router();
const musicController = require("../../controllers/musicController");

router.route("/")
  .get(musicController.findAll)
  .post(musicController.create);

router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);
module.exports = router;