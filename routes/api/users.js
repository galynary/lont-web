/* eslint-disable no-undef */
const express = require("express");
const { schemas } = require("../../models/user"); // Змінили шлях до схеми користувача
const controllers = require("../../controllers/users"); // Змінили шлях до контролерів користувача
const { validateBody, isValidId } = require("../middlewares"); // Змінили шлях до проміжних обробників

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), controllers.registerUser);
router.delete("/:id", isValidId, controllers.removeUser);
router.get("/:id", controllers.getUserById); // Виправили функцію getUserById
router.put("/:id", isValidId, validateBody(schemas.updateSchema), controllers.updateUser);

module.exports = router;
