import { app } from "./app.js";
import mongoose from "mongoose";

//espCEiKG4SLyzI8O

const DB_HOST =
  "mongodb+srv://Oksana:espCEiKG4SLyzI8O@cluster0.kjc54.mongodb.net/Phonebook?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(3001, () => {
      console.log("Example app listening on port 3001!");
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
