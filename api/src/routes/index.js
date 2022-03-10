const { Router } = require("express");

const productsRoute = require("./productsRoute");
const brandsRoute = require("./brandsRoute");

const router = Router();

router.use("/products", productsRoute);
router.use("/brands", brandsRoute);

module.exports = router;
