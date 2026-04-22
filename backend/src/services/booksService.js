const prisma = require('../prisma/client');

const CATEGORY_MAP = {
  top: 'top',
  new: 'new',
  lastMonth: 'lastMonth'
};

async function listBooks(category) {
  const categoryId = CATEGORY_MAP[category];
  if (!categoryId) {
    return null;
  }

  return prisma.book.findMany({
    where: { categoryId },
    orderBy: { title: 'asc' }
  });
}

module.exports = {
  listBooks,
  CATEGORY_MAP
};
