const router = require("express").Router();
const { login, logout } = require("../controllers/authController");
const {
    onlySoldiersAndCommanders,
} = require("../middlewares/aouthMiddlewares");

// routes/authRouter.js
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Returns a sample message
 *     responses:
 *       200:
 *         description: A successful response
 */

router.post("/login", login);

router.post("/logout", onlySoldiersAndCommanders, logout);

module.exports = router;
