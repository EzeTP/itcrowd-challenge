const { Products } = require("../db");

const getProducts = async (req, res, next) => {
  try {
    let productsDb = await Products.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.status(200).json(productsDb);
  } catch (err) {
    next(err);
  }
};

const newProduct = async (req, res) => {
  const { name, description, image_url, price } = req.body;

  const newProducts = {
    name,
    description,
    image_url,
    price,
  };

  const [createdProduct, alreadyCreated] = await Products.findOrCreate({
    where: {
      name: name,
      price: price,
    },
    defaults: newProducts,
  });

  res.send(createdProduct);
};

module.exports = {
  newProduct,
  getProducts,
};
