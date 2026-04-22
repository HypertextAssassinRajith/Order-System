const ordersService = require('../services/ordersService');

async function postOrder(req, res, next) {
  try {
    const { items } = req.body;
    const result = await ordersService.createOrder(items);

    if (result.error) {
      return res.status(result.status).json({ message: result.error });
    }

    return res.status(result.status).json(result.order);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  postOrder
};
