import mongoose from "mongoose";
import config from "../config/config.js";

(async () => {
  const db = mongoose.connect(config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db.then((db) => console.log(`Connected - DB: ${db.connection.name}`))
})();
