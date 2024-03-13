/* eslint-disable no-undef */
const express = require("express");
const { schemas } = require("../../models/user"); // Змінили шлях до схеми користувача
const ctrl = require("../../controllers/users"); // Змінили шлях до контролерів користувача
const { validateBody, isValidId } = require("../../middlewares"); // Змінили шлях до проміжних обробників

const router = express.Router();

router.post("/api/register", validateBody(schemas.registerSchema), ctrl.registerUser);
router.delete("/:id", isValidId, ctrl.removeUser);
router.get("/:id", ctrl.getUserById); // Виправили функцію getUserById
router.put("/:id", isValidId, validateBody(schemas.updateSchema), ctrl.updateUser);

module.exports = router;
