const { Brands } = require("../db");

const getBrands = async (req, res, next) => {
  try {
    let brandsDb = await Brands.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    /* res.status(200).json(brandsDb); */
    res.send(brandsDb);
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

const modifyBrand = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Brands.update(req.body, {
      where: {
        id: id,
      },
    });
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getBrands,
  newBrand,
  modifyBrand,
};
