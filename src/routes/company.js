const Company = require("../models/Company");

const companyRoute = async (ctx) => {
  const { page, limit } = ctx.request.query;

  const offset = +page * +limit;

  try {
    const companies = await Company.find({})
      .skip(offset)
      .limit(+limit);

    ctx.body = companies;
  } catch (err) {
    ctx.throw(err.status || 403, err.text);
  }
};

module.exports = companyRoute;
