import { Router } from "express";
import passport from 'passport';
import { getToken, getLogOut } from "../controllers/auth.controller.js";

const auth = new Router();

auth.post("/login", passport.authenticate('login', {
    failWithError: true,
  }),
  getToken
);

auth.post("/register", passport.authenticate('register', {
    failWithError: true,
  }),
  getToken
);

auth.post('/logout', getLogOut)

export default auth;
