const { Schema, model } = require("mongoose");
const Joi = require("joi");

const phoneRegexp = /^(\+38)?0\d{9}$/;

const handleMongooseError = (error, data, next) => {
    const { name, code } = error;
    console.log(name);
    console.log(code);
    const status = name === "MongoServerError" && code === 11000 ? 409 : 400;
    error.status = status;
    next();
};

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        enum: ["Легоцького 1", "Легоцького 3", "Легоцького 5", "Лінтура 1", "Лінтура 7", "Легоцького 5", "Минайська 22"],
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        match: phoneRegexp,
    },
    tariff: {
        type: String,
        enum: ["Базовий", "Сімейний", "Бізнес"],
        required: true,
    },
});

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
    name: Joi.string().required(),
    address: Joi.string().valid("Легоцького 1", "Легоцького 3", "Легоцького 5", "Лінтура 1", "Лінтура 7", "Легоцького 5", "Минайська 22").required(),
    phone: Joi.string().pattern(phoneRegexp).required(),
    tariff: Joi.string().valid("Базовий", "Сімейний", "Бізнес").required(),
});
const updateSchema = Joi.object({
    name: Joi.string().required(),
    address: Joi.string().valid("Легоцького 1", "Легоцького 3", "Легоцького 5", "Лінтура 1", "Лінтура 7", "Легоцького 5", "Минайська 22").required(),
    phone: Joi.string().pattern(phoneRegexp).required(),
    tariff: Joi.string().valid("Базовий", "Сімейний", "Бізнес").required(),
});
const schemas = { registerSchema, updateSchema };

const User = model("user", userSchema);

module.exports = { User, schemas, handleMongooseError };