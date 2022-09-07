const Book = require("../models/book");
const book = require("../models/book");

const getAll = async (req, res) => {
   try {
      const book = await Book.findAll();
      res.status(200).json({
         book,
      });
   } catch (error) {
      res.status(404).json({
         message: error.message,
      });
   }
};

const add = async (req, res) => {
   try {
      const { name, author, price } = req.body;

      const book = await Book.create({ name, author, price });
      res.status(200).json({
         book,
      });
   } catch (error) {
      res.status(404).json({
         message: error.message,
      });
   }
};

const update = async (req, res) => {
   try {
      const { name, author, price } = req.body;

      const book = await Book.update({ name, author, price }, { where: { id: req.params.id } });
      res.status(200).json({
         book,
      });
   } catch (error) {
      res.status(404).json({
         message: error.message,
      });
   }
};

const getOne = async (req, res) => {
   try {
      const book = await Book.findOne({ where: { id: req.params.id } });
      res.status(200).json({
         book,
      });
   } catch (error) {
      res.status(404).json({
         message: error.message,
      });
   }
};

const bookDelete = async (req, res) => {
   try {
      const book = await Book.destroy({ where: { id: req.params.id } });
      res.status(200).json({
         book,
         message: "delete",
      });
   } catch (error) {
      res.status(404).json({
         message: error.message,
      });
   }
};

module.exports = { getAll, add, getOne, bookDelete, update };
