import HttpError from "../helpers/HttpError.js";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const { SECRET_KEY } = process.env;
console.log("SECRET_KEY:", SECRET_KEY); // Logging the secret key

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  console.log("Authorization Header:", authorization); // Logging the authorization header
  const [bearer, token] = authorization.split(" ");
  console.log("Token:", token); // Logging the bearer

  if (bearer !== "Bearer" || !token) {
    console.log("Invalid token format");
    next(HttpError(401, "Not authorized"));
  }

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    console.log("Decoded id:", id); // Logging the decoded
    const user = await User.findById(id);
    console.log("User:", user); // Logging the user
    if (!user || !user.token || user.token !== token) {
      next(HttpError(401, "Not authorized"));
    }
    req.user = user;

    next();
  } catch (error) {
    next(HttpError(401, "Not authorized"));
  }
};

export default authenticate;
