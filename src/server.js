import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is running on port: ", port);
});
