const { Router } = require("express");

const router = Router();

const {
  newBrand,
  getBrands,
  modifyBrand,
} = require("../controller/brandsController");

router.get("/", getBrands);
router.post("/", newBrand);
router.put("/", modifyBrand);

module.exports = router;
