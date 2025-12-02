import express, { json } from "express";
const app = express();

app.use(json());

// route tes
app.get("/", (req, res) => {
  res.send("Chess Express API is running");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
