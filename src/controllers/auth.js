const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

module.exports.login = async (ctx) => {
  const { username, password } = ctx.request.body;

  if (!username) ctx.throw(422, "Username required");
  if (!password) ctx.throw(422, "Password required");

  const candidate = await User.findOne({
    username,
  });

  if (candidate) {
    const passResult = bcrypt.compareSync(password, candidate.password);

    if (passResult) {
      const payload = { username, password };
      const secret = process.env.JWT_SECRET;

      const token = jwt.sign(payload, secret, {
        expiresIn: 60 * 60,
      });

      ctx.body = {
        token,
      };
    } else {
      ctx.throw(403, "Passwords do not match");
    }
  } else {
    ctx.throw(403, "User not found");
  }
};

module.exports.register = async (ctx) => {
  const { username, password } = ctx.request.body;

  const candidate = await User.findOne({
    username,
  });

  if (candidate) {
    ctx.throw(401, "Email already taken");
  } else {
    const salt = bcrypt.genSaltSync(10);

    const user = new User({
      username,
      password: bcrypt.hashSync(password, salt),
    });

    try {
      await user.save();

      ctx.body = user;
    } catch (err) {
      ctx.throw(401, err);
    }
  }
};
