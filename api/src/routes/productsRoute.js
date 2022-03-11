const { Router } = require("express");

const router = Router();

const {
  newProduct,
  getProducts,
  deleteProduct,
  modifyProduct,
  productById,
} = require("../controller/productsController");

router.get("/", getProducts);
router.get("/:id", productById);
router.post("/", newProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", modifyProduct);

module.exports = router;
