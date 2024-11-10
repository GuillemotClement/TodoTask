import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";

//importation des setting .env
dotenv.config();
//création du serveur
const app = express();

//définition du port d'écoute
const PORT = 3000;

// déclaration d'une route
app.get("/", (req: Request, res: Response) => {
	res.status(200).send("Hello, world!");
});

app
	.listen(PORT, () => {
		console.log(
			`My first Express app - listening on port http://localhost:${PORT}`,
		);
	})
	.on("Error", (error) => {
		throw new Error(error.message);
	});
