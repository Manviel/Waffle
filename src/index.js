const Koa = require("koa");
const Router = require("@koa/router");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");

require("dotenv").config();

const errorHandler = require("./middleware/errorHandler");
const initDB = require("./middleware/database");
const authenticated = require("./middleware/authenticated");

const authRoute = require("./routes/auth");
const publicRoute = require("./routes/public");
const orderRoute = require("./routes/order");

const app = new Koa();
const router = new Router();

initDB();

const logger = async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;

  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
};

app.use(logger).use(errorHandler).use(bodyParser()).use(cors());

router.get("/", publicRoute);
router.post("/auth", authRoute);
router.get("/orders", authenticated, orderRoute);

app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.API_PORT);
