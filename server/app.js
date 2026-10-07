import express from "express";
import authRouter from "./routes/auth.js";

const app = express();
const port = 4000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello world!");
});
app.use("/api", authRouter);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

export default app;
