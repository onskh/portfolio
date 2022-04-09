const router = require("express").Router();
const itemController = require("../controllers/item.controller");

router.get("/", itemController.selectAll);
router.post("/", itemController.insert);
router.get("/message", itemController.selectAllM);
router.delete("/delete/:id", itemController.deleteOne);
module.exports = router;