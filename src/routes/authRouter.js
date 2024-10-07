const router = require("express").Router();
const { login, logout } = require("../controllers/authController");
const { onlySoldiersAndCommanders } = require("../middlewares/aouthMiddlewares")

router.post("/login", login);

router.post("/logout", onlySoldiersAndCommanders, logout);

module.exports = router;
