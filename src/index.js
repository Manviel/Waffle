const Koa = require("koa");
const Router = require("@koa/router");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
const compress = require("koa-compress");
const swagger = require("swagger2");
const { ui } = require("swagger2-koa");

require("dotenv").config();

const errorHandler = require("./middleware/errorHandler");
const initDB = require("./middleware/database");
const authenticated = require("./middleware/authenticated");

const authRoute = require("./routes/auth");
const publicRoute = require("./routes/public");
const customerRoute = require("./routes/customer");

const app = new Koa();
const router = new Router();

const swaggerDocument = swagger.loadDocumentSync("swagger.yaml");

initDB();

const logger = async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;

  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
};

router.get("/", publicRoute);
router.use("/auth", authRoute);
router.get("/customers", authenticated, customerRoute);

app
  .use(ui(swaggerDocument, "/docs"))
  .use(logger)
  .use(errorHandler)
  .use(bodyParser())
  .use(cors())
  .use(compress())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(process.env.API_PORT);
