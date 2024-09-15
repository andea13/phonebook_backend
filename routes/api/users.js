import express from "express";
import isValidId from "../../middlewares/isValidId.js";
import validateBody from "../../middlewares/validateBody.js";
import { schemas } from "../../models/user.js";
import authController from "../../controllers/auth.js";
import authenticate from "../../middlewares/autenticate.js";

const usersRouter = express.Router();

//signup

usersRouter.post(
  "/signup",
  validateBody(schemas.signUpSchema),
  authController.signUp
);

usersRouter.post(
  "/login",
  validateBody(schemas.loginSchema),
  authController.login
);

usersRouter.post("/logout", authenticate, authController.logout);

usersRouter.get("/current", authenticate, authController.getCurrentUser);

export default usersRouter;
