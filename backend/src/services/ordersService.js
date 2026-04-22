const prisma = require('../prisma/client');

function validateOrderItems(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return 'Order must include at least one item.';
  }

  for (const item of items) {
    if (!item || typeof item.bookId !== 'string' || item.bookId.trim() === '') {
      return 'Each item must include a valid bookId.';
    }

    if (!Number.isInteger(item.qty) || item.qty < 1) {
      return 'Each item qty must be a positive integer.';
    }
  }

  return null;
}

async function createOrder(items) {
  const validationError = validateOrderItems(items);
  if (validationError) {
    return { error: validationError, status: 400 };
  }

  const mergedItemsMap = new Map();
  for (const item of items) {
    const existingQty = mergedItemsMap.get(item.bookId) || 0;
    mergedItemsMap.set(item.bookId, existingQty + item.qty);
  }

  const normalizedItems = [...mergedItemsMap.entries()].map(([bookId, qty]) => ({
    bookId,
    qty
  }));

  const bookIds = normalizedItems.map((i) => i.bookId);
  const existingBooks = await prisma.book.findMany({
    where: { id: { in: bookIds } },
    select: { id: true }
  });

  if (existingBooks.length !== bookIds.length) {
    return { error: 'One or more bookId values do not exist.', status: 400 };
  }

  const order = await prisma.order.create({
    data: {
      items: {
        create: normalizedItems
      }
    },
    include: {
      items: true
    }
  });

  return { order, status: 201 };
}

module.exports = {
  createOrder
};
