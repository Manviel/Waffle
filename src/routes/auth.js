const Router = require("@koa/router");

const controller = require("../controllers/auth");

const router = new Router();

router.post("/login", controller.login);
router.post("/register", controller.register);

module.exports = router.routes();
