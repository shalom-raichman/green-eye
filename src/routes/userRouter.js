const router = require("express").Router();
const {
    register,
    getProfile,
    setSettings,
} = require("../controllers/userController");
const { onlySoldiersAndCommanders } = require("../middlewares/aouthMiddlewares")

/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Register a user
 *     tags: [Register]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_name:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: String,
 *                 enum: ["soldier", "commander"]
 *               area:
 *                 type: String,
 *                 enum: ["center", "north", "south", "west", "east"]
 *               units: 
 *                 type: [Number]
 *           example:
 *             user_name: "johndoe"
 *             password: "secretpassword123"
 *             area: "center"
 *             role: "soldier"
 *             units: [8200, 81]
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 */
router.post("/register", register);

router.get("/profile", onlySoldiersAndCommanders, getProfile);

router.patch("/settings", onlySoldiersAndCommanders ,setSettings);

module.exports = router;
