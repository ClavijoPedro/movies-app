import jwt from "jsonwebtoken";
import config from "../config/config.js";

export function createToken(user) {
  const token = jwt.sign(user, config.PRIVATE_KEY);
  return token;
}


export function validateToken(token){
    const verifiedToken = jwt.verify(token, config.PRIVATE_KEY)
    return verifiedToken 
}