const Customer = require("../models/Customer");

const customerRoute = async (ctx) => {
  const { page, limit } = ctx.request.query;

  const offset = +page * +limit;

  try {
    const customers = await Customer.find({})
      .skip(offset)
      .limit(+limit);

    ctx.body = customers;
  } catch (err) {
    ctx.throw(err.status || 403, err.text);
  }
};

module.exports = customerRoute;
