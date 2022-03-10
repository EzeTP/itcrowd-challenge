const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("brands", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logo_url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
