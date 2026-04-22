const booksService = require('../services/booksService');

async function getBooks(req, res, next) {
  try {
    const { category } = req.query;

    if (!category) {
      return res.status(400).json({
        message: 'Query parameter "category" is required (top, new, lastMonth).'
      });
    }

    const books = await booksService.listBooks(category);

    if (books === null) {
      return res.status(400).json({
        message: 'Invalid category. Use one of: top, new, lastMonth.'
      });
    }

    return res.json(books);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getBooks
};
