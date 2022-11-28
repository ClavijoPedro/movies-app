import bcrypt from "bcrypt";

export function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
}

export function isValidPasword(user, password) {
  return bcrypt.compareSync(password, user.password);
}
