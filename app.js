const express = require("express");
const bodyParser = require('body-parser');
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const usersRouter = require("./routes/api/users"); 


const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/users", usersRouter);

app.use((_req, res, _next) => {
	res.status(404).json({ message: "Not found" });
});

app.use((err, _req, res, _next) => {
	const { status = 500, message = "Server error" } = err;
	res.status(status).json({ message });
});

module.exports = app;
