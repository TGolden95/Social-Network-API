const router = require("express").Router();
const { getUser, createUser } = require("../../controllers/usercontroller");

router.route("/").get(getUser).post(createUser);

module.exports = router;
