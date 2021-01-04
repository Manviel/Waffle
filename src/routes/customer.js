const Customer = require("../models/Customer");

const customerRoute = async (ctx) => {
  const query = {};

  try {
    const customers = await Customer.find(query).limit(10);

    ctx.body = customers;
  } catch (err) {
    ctx.throw(err.status || 403, err.text);
  }
};

module.exports = customerRoute;
