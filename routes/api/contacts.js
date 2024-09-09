import express from "express";

const contactsRouter = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact page</h1>");
});

app.get("/contact/:id", (req, res) => {
  res.send(`<h1>Contact</h1> Параметр: ${req.params.id}`);
});

export default contactsRouter;
