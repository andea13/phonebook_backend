import express from "express";
import validateBody from "../../middlewares/validateBody.js";
import schemas from "../../models/user.js";
import usersController from "../../controllers/users.js";

const usersRouter = express.Router();

usersRouter.get("/", usersController.getAllUsers);

// usersRouter.get("/users", (req, res) => {
//   res.send("<h1>Users page</h1>");
// });

// usersRouter.get("/users/:id", (req, res) => {
//   res.send(`<h1>User</h1> Параметр: ${req.params.id}`);
// });

export default usersRouter;
