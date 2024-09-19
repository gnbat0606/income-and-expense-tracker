import cors from "cors";
import express from "express";
import env from "dotenv";
env.config();

const app = express();
const port = process.env.PORT;

console.log(port);

app.use(cors());
app.use(express.json());

app.listen(port, console.log(`http://localhost/${port}`));
