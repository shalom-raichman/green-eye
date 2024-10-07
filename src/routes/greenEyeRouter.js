const router = require("express").Router();
const {createPoll, getNotifications, getPollById, reply, deletePoll, } = require("../controllers/greenEyeController")

router.post("/", createPoll);

router.get("/my", getNotifications);

router.get("/:id", getPollById);

router.post("/reply", reply);

router.delete("/:id", deletePoll);

module.exports = router;
