const { schemas  } = require("../models/user");
const { User } = require("../models/contact");
const { ctrlWrapper, HttpError } = require("../helpers");

const addUser = async (req, res) => {
	try {
		const { name, address, phone, tariff } = req.body;

		// Перевірка, чи користувач з такими даними вже існує
		const existingUser = await User.findOne({ name, address, phone, tariff });
		if (existingUser) {
			throw HttpError(409, "На цю адресу вже була подана заявка");
		}

		// Створення нового користувача
		const newUser = new User({
			name,
			address,
			phone,
			tariff,
		});
		await newUser.save();

		// Відправлення відповіді клієнту
		res.send(`Дякуємо, ${name}! Ваша заявка прийнята.`);
	} catch (error) {
		// Обробка помилок
		console.error("Error in registration:", error);
		res.status(error.status || 500).json({ error: error.message || "Internal Server Error" });
	}
};




const listUsers = async (req, res) => {
	const { _id: owner } = req.user;
	const { page = 1, limit = 20 } = req.query;
	// пагінація контактів
	const skip = (page - 1) * limit;
	const result = await User.find({ owner }, "-createdAt -updatedAt", {
		skip,
		limit,
	}).populate("owner", "name, email");
	res.status(200).json(result);
};

const getUserById = async (req, res) => {
	const { error } = schemas.registerSchema.validate(req.body);
	if (error) {
		throw HttpError(404, error.message);
	}
	const { id } = req.params;
	const result = await User.findById({ id });
	// const result = await User.findOne({ _id: UserId });
	res.status(200).json(result);
};



const removeUser = async (req, res, next) => {
	const { UserId } = req.params;
	const result = await User.removeUser(UserId);
	if (!result) {
		throw HttpError(404, "Not found");
	}
	res.status(200).json({ message: "User deleted" });
};

const updateUser = async (req, res) => {
	const { error } = schemas.updateSchema.validate(req.body);
	if (error) {
		throw HttpError(404, "missing fields");
	}
	const { UserId } = req.params;
	const result = await User.findIdAndUpdate(UserId, req.body);
	if (!result) {
		throw HttpError(404, "Not found");
	}
	res.status(200).json(result);
};



module.exports = {
	listUsers: ctrlWrapper(listUsers),
	getUserById: ctrlWrapper(getUserById),
	addUser: ctrlWrapper(addUser),
	removeUser: ctrlWrapper(removeUser),
	updateUser: ctrlWrapper(updateUser)
	
};



