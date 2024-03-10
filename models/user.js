const { Schema, model } = require("mongoose");
const Joi = require("joi");

const phoneRegexp = /^\d{3} \d{2} \d{3} \d{2} \d{2}$/;

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
    address: Joi.string().required(),
    phone: Joi.string().pattern(phoneRegexp).required(),
    tariff: Joi.string().valid("Базовий", "Сімейний", "Бізнес").required(),
});
const updateSchema = Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().pattern(phoneRegexp).required(),
    tariff: Joi.string().valid("Базовий", "Сімейний", "Бізнес").required(),
});
const schemas = { registerSchema, updateSchema };

const User = model("user", userSchema);

module.exports = { User, schemas, handleMongooseError };