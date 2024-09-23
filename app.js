import express from "express";
import cors from "cors";
import contactsRouter from "./routes/api/contacts.js";
import usersRouter from "./routes/api/users.js";
import dotenv from "dotenv";

export const app = express();

dotenv.config();

const corsOptions = {
  origin: "https://andea13.github.io", // Replace with your frontend's actual origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  allowedHeaders: ["Content-Type", "Authorization"], // Define allowed headers
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/contacts", contactsRouter);
app.use("/users", usersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

// app.use((req, res, next) => {
//   console.log("Наше проміжне ПЗ");
//   next();
// });

// app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>Contact page</h1>");
// });

// app.get("/contact/:id", (req, res) => {
//   res.send(`<h1>Contact</h1> Параметр: ${req.params.id}`);
// });
