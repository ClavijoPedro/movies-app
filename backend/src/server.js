import express from "express";
import config from "./config/config.js";
import cors from "cors";
import session from "express-session";
import passport from "passport";

import "./database/database.js";
import './auth/passport.local.js'
import usersRouter from "./routes/users.router.js";
import authRouter from "./routes/auth.router.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(config.EXPRESS_SESSION));

app.use(passport.initialize());
app.use(passport.session());

app.use("/users", usersRouter);
app.use("/auth", authRouter);


const server = app.listen(config.PORT, () => {
  console.log(`Server listen - PORT: ${config.PORT}`);
});
server.on("error", (error) => {
  console.log(error);
});
