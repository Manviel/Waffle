const errorHandler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.type = "json";
    ctx.body = { error: err.message };
    ctx.app.emit("error", err, ctx);
  }
};

module.exports = errorHandler;
