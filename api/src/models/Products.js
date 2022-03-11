const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("products", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brandId: {
      type: DataTypes.INTEGER,
      /*  references: {
        model: "Brands",
        key: "id",
      }, */
    },
  });
};
