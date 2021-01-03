const Koa = require("koa");
const Router = require("@koa/router");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");

require("dotenv").config();

const errorHandler = require("./middleware/errorHandler");

const authRoute = require("./api/auth");
const publicRoute = require("./api/public");

const app = new Koa();
const router = new Router();

const logger = async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;

  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
};

app.use(logger).use(errorHandler).use(bodyParser()).use(cors());

router.get("/", publicRoute);
router.post("/auth", authRoute);

app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.API_PORT);
