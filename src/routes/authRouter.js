const router = require("express").Router();
const { login, logout } = require("../controllers/authController");
const {
    onlySoldiersAndCommanders,
} = require("../middlewares/aouthMiddlewares");

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login to the system.
 *     description: Login to the system.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             user:
 *               type: object
 *               properties:
 *                 user_name:
 *                   type: string
 *                   description: no description
 *                 password:
 *                   type: string
 *                   description: no description
 *     example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 *         finished: false
 *         createdAt: 2020-03-10T04:05:06.157Z
 *     responses:
 *       '201':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */
router.post("/login", login);

router.post("/logout", onlySoldiersAndCommanders, logout);

module.exports = router;
