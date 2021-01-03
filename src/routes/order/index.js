const Order = require("../../models/Order");

const orderRoute = async (ctx) => {
  console.log(ctx);

  const query = {
    user: ctx.user.id,
  };

  try {
    const orders = await Order.find(query);

    ctx.body = orders;
  } catch (error) {
    ctx.throw(err.status || 403, err.text);
  }
};

module.exports = orderRoute;
