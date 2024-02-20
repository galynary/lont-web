/* eslint-disable no-undef */
const express = require("express");
const { schemas } = require("../../models/user");
const controllers = require("../../controllers/users");
const { validateBody, isValidId } = require("../../middlewares");

const router = express.Router();


router.post("/register", validateBody(schemas.registerSchema), controllers.registerUser);
router.delete("/:id", isValidId, controllers.removeUser);
router.get("/:id", isValidId, controllers.getUserById);
router.put("/:id", isValidId, validateBody(schemas.updateSchema), controllers.updateUser);

module.exports = router;
