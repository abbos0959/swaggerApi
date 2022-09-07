const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Book = sequelize.define(
   "book",
   {
      id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
      name: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.INTEGER },
      author: { type: DataTypes.STRING, allowNull: false },
   },
   {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
   }
);

module.exports = Book;
