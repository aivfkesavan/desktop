import express from 'express';
import cors from "cors";

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get("/health", (req, res) => res.json({ status: "ok" }))
app.get("/welcome", (req, res) => res.json({ message: "Welcome to Nidum AI" }))

export default app
