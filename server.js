import { app } from "./app.js";
import mongoose from "mongoose";

const { DB_HOST, PORT = 3001 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}!`);
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
