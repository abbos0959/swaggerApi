const router = require("express").Router();
const BookController = require("../controllers/book");
router.route("/book").get(BookController.getAll).post(BookController.add);

router
   .route("/book/:id")
   .delete(BookController.bookDelete)
   .patch(BookController.update)
   .get(BookController.getOne);

module.exports = router;
