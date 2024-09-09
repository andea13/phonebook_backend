import express from "express";
import cors from "cors";
import contactsRouter from "./routes/api/contacts";
import usersRouter from "./routes/api/users";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);
app.use("/api/users", usersRouter);

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
