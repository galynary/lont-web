// підключення до бази даних
const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST, PORT = 2000 } = process.env;

mongoose.set("strictQuery", true);

mongoose
	.connect(DB_HOST)
	.then(() => {
		app.listen(PORT, () => {
			console.log("Server running. Use our API on port:2000");
		});
	})
	.catch((error) => {
		console.log(error.message);
		process.exit(1);
	});