const { Products, Brands } = require("../db");

const getProducts = async (req, res, next) => {
  try {
    let productsDb = await Products.findAll({
      include: Brands,
    });

    res.status(200).json(productsDb);
  } catch (err) {
    next(err);
  }
};

const newProduct = async (req, res) => {
  const { name, description, image_url, price, brandId } = req.body;

  const newProducts = {
    name,
    description,
    image_url,
    price,
    brandId,
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

const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Products.destroy({
      where: {
        id: id,
      },
    });
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};

const modifyProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Products.update(req.body, {
      where: {
        id: id,
      },
    });
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};

const productById = async (req, res, next) => {
  const { id } = req.params;
  try {
    let productId;
    if (id) {
      productId = await Products.findByPk(id, {
        include: {
          model: Brands,
        },
      });
    } else {
      res.send({ message: "something goes wrong" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  newProduct,
  getProducts,
  deleteProduct,
  modifyProduct,
};
