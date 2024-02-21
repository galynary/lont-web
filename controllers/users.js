const { schemas } = require("../models/user");
const { User } = require("../models/user");
const { ctrlWrapper, HttpError } = require("../helpers");


const registerUser = async (req, res) => {
  try {
    const { name, address, phone, tariff } = req.body;

    const existingUser = await User.findOne({ name, address, phone, tariff });
    if (existingUser) {
      throw new HttpError(409, "На цю адресу вже заявка подана");
    }

    const newUser = new User({
      name,
      address,
      phone,
      tariff,
    });
    await newUser.save();

    res.send(`Дякую, ${name}! Вашу заявку прийнято.`);
  } catch (error) {
    console.error("Error in registration:", error);
    res.status(error.status || 500).json({ error: error.message || "Внутрішня помилка сервера" });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.findById(id);
    if (!result) {
      throw new HttpError(404, "Користувача не знайдено");
    }
    res.status(200).json(result);
  } catch (error) {
    console.error("Error getting user by ID:", error);
    res.status(error.status || 500).json({ error: error.message || "Internal Server Error" });
  }
};

const removeUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.findByIdAndDelete(id);
    if (!result) {
      throw new HttpError(404, "User not found");
    }
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    console.error("Error removing user:", error);
    res.status(error.status || 500).json({ error: error.message || "Internal Server Error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = schemas.updateSchema.validate(req.body);
    if (error) {
      throw new HttpError(400, "Missing or invalid fields in request body");
    }
    const result = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
      throw new HttpError(404, "User not found");
    }
    res.status(200).json(result);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(error.status || 500).json({ error: error.message || "Internal Server Error" });
  }
};

module.exports = {
  getUserById: ctrlWrapper(getUserById),
  registerUser: ctrlWrapper(registerUser ),
  removeUser: ctrlWrapper(removeUser),
  updateUser: ctrlWrapper(updateUser)
};


