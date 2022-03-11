const { Brands } = require("../db");

const getBrands = async (req, res, next) => {
  try {
    let brandsDb = await Brands.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.status(200).json(brandsDb);
  } catch (err) {
    next(err);
  }
};

const newBrand = async (req, res) => {
  const { name, logo_url } = req.body;

  const newBrands = {
    name,
    logo_url,
  };

  const [createdBrand, alreadyCreated] = await Brands.findOrCreate({
    where: {
      name: name,
    },
    defaults: newBrands,
  });

  res.send(createdBrand);
};

module.exports = {
  getBrands,
  newBrand,
};
