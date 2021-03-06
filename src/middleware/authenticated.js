const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

const authenticated = async (ctx, next) => {
  if (!ctx.headers.authorization) ctx.throw(403, "No token.");

  const token = ctx.headers.authorization.split(" ")[1];

  await next();

  try {
    ctx.request.jwtPayload = jwt.verify(token, secret);
  } catch (err) {
    ctx.throw(403, "Token expired");
  }
};

module.exports = authenticated;
