const { Router } = require("express");

const router = Router();

const { newBrand, getBrands } = require("../controller/brandsController");

router.get("/", getBrands);
router.post("/", newBrand);

module.exports = router;
