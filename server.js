import { app } from "./app.js";
import mongoose from "mongoose";

const { DB_HOST, PORT } = process.env;
const port = PORT || 4000;

console.log(`Render assigned port: ${PORT}`);
console.log(`Using port: ${port}`);

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}!`);
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
