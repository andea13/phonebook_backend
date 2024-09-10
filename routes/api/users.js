import express from "express";

const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
  res.send("Hello Users!");
});

usersRouter.get("/users", (req, res) => {
  res.send("<h1>Users page</h1>");
});

usersRouter.get("/users/:id", (req, res) => {
  res.send(`<h1>User</h1> Параметр: ${req.params.id}`);
});

export default usersRouter;
