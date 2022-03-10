const { Router } = require("express");

const router = Router();

const { newProduct, getProducts } = require("../controller/productsController");

router.get("/", getProducts);
router.post("/", newProduct);

module.exports = router;
