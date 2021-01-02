const authRoute = (ctx) => {
  ctx.body = {
    status: "success",
    message: "I am the auth route.",
  };
};

module.exports = authRoute;
