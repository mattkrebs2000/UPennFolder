const router = require("express").Router();
const userController = require("../../controllers/userController");


//Matches with "api/user" from util/API.js
router.route("/")
.get(userController.findAll)
.post(userController.create);


module.exports = router;