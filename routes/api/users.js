import express from "express";

const usersRouter = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Users!");
});

app.get("/users", (req, res) => {
  res.send("<h1>Users page</h1>");
});

app.get("/users/:id", (req, res) => {
  res.send(`<h1>User</h1> Параметр: ${req.params.id}`);
});

export default usersRouter;
