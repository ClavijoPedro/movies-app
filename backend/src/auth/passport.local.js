import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import UserServices from "../services/user.services.js";
import { hashPassword, isValidPasword } from "../utils/encryptPaswword.js";

const users = new UserServices();

passport.use("login",  new LocalStrategy(
    {
      usernameField: "email",
    },
    async function (email, password, done) {
      try {
        let user = await users.getUser({ email });
        if (!user) {
          console.log(`Usuario ${email} no encontrado`);
          return done(null, false, { message: "usuario no encontrado" });
        }
        if (!isValidPasword(user, password)) {
          console.log("Contraseña inválida");
          return done(null, false, { message: "contraseña inválida" });
        }
        console.log(user)
        return done(null, user);
      } catch (error) {
        console.log("Login error: ", error);
        return done(error);
      }
    }
  )
);

passport.use("register", new LocalStrategy(
    {
      usernameField: "email",
      passReqToCallback: true,
    },
    async function (req, email, password, done) {
      try {
        let user = await users.getUser({ email });
        if (user) {
          // console.log("usuario ya registrado");
          return done(null, false, {
            message: "El usuario ya esta registrado",
          });
        }
        const hashedPassword = hashPassword(password);
        const newUser = {
          ...req.body,
          password: hashedPassword,
        };
        const saveUser = await users.createUser(newUser);

        return done(null, newUser);
      } catch (error) {
          console.log("Register error:", error.message);
          done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser((email, done) => {
  const user = users.getUser({ email });
  done(null, user);
});

export default passport;
