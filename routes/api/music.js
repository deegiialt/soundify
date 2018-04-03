const router = require("express").Router();
const musicController = require("../../controllers/musicController");

router.route("/")
  .get(musicController.findAll)
  // .post(musicController.create);

router
  .route("/upload")
  .post(musicController.create)
module.exports = router;