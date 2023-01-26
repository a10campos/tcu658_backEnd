const express = require("express");

const {getAllLevels} = require("../controllers/levels");

const router = express.Router();

router.route("/levels").get(getAllLevels);


module.exports = router;