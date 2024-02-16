/* eslint-disable no-undef */
const express = require("express");

const { schemas } = require("../../models/user");

const ctrl = require("../../controllers/users");

const { validateBody, isValidId} = require("../../middlewares");

const router = express.Router();
router.get("/",  ctrl.listUsers);
router.post("/register", validateBody(schemas.registerSchema), ctrl. addUser);
router.delete("/:id",  isValidId, ctrl.removeUser);
router.get("/:id", isValidId, ctrl.getUserById);
router.put(
	"/:id",isValidId,
	validateBody(schemas.addSchema),
	ctrl.updateUser
);




module.exports = router;
