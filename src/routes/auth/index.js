const jwt = require("jsonwebtoken");

const authRoute = (ctx) => {
  const { username, password } = ctx.request.body;

  if (!username) ctx.throw(422, "Username required.");
  if (!password) ctx.throw(422, "Password required.");

  const payload = { username, password };
  const secret = process.env.JWT_SECRET;
  const token = jwt.sign(payload, secret);

  ctx.body = {
    token: `Bearer ${token}`,
  };
};

module.exports = authRoute;
